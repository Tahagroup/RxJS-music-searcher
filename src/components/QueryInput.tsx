import React, { useEffect, useRef } from "react";
import {
  catchError,
  debounceTime,
  filter,
  fromEvent,
  of,
  switchMap,
  tap,
} from "rxjs";
import { fromFetch } from "rxjs/fetch";
import styles from "./QueryInput.module.css";

interface propsType {
  setFetchedData: (response: responseType | undefined) => void;
  fetchedData: responseType | undefined;
  setError: (response: ErrorType | undefined) => void;
  setIsLoading: (isLoading: boolean) => void;
}
function QueryInput({
  setFetchedData,
  fetchedData,
  setError,
  setIsLoading,
}: propsType) {
  const offset = useRef<number>(0);
  const searchText = useRef<string>("");

  useEffect(() => {
    const scrollChanges$ = fromEvent(window, "scroll");
    const scrollPipe = scrollChanges$.pipe(
      filter((_) => {
        return (
          window.innerHeight + document.documentElement.scrollTop + 0.2 >=
          document.documentElement.offsetHeight
        );
      }),
      filter((_) => {
        const thereIsMoreData =
          fetchedData!.count !== fetchedData!.recordings.length;
        if (!thereIsMoreData) {
          setIsLoading(false);
        }
        return thereIsMoreData;
      }),
      tap((val) => {
        setIsLoading(true);
        offset.current = offset.current + 25;
      }),
      switchMap((value) => {
        return fromFetch(
          `https://musicbrainz.org/ws/2/recording?query=${searchText.current!}&offset=${
            offset.current
          }&fmt=json`
        );
      }),
      switchMap((response) => {
        if (response.ok) {
          // OK return data
          return response.json();
        } else {
          // Server is returning a status requiring the client to try something else.
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError((err) => {
        // Network or other error, handle appropriately
        console.error(err);
        throw new Error(err.message);
        // return of({ error: true, message: err.message });
      })
    );
    const scrollSubscription = scrollPipe.subscribe({
      next: (data) => {
        if (fetchedData === undefined) {
          return;
        }
        setIsLoading(false);
        setFetchedData({
          ...fetchedData!,
          recordings: [...fetchedData!.recordings, ...data.recordings],
        });
      },
      error: (error) => {
        setIsLoading(false);
        setError(error);
      },
      complete: () => setIsLoading(false),
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // create observables using fromEvent
    const inputChanges$ = fromEvent(
      document.querySelector("#searchInput")!,
      "input"
    );
    const changes = inputChanges$.pipe(
      debounceTime(1000),
      tap((event) => {
        searchText.current = (event.target as HTMLInputElement).value;
        if (searchText.current === "") {
          setFetchedData(undefined);
        }
        setError(undefined);
      }),
      filter((event) => (event.target as HTMLInputElement).value !== ""),
      // switchMap cancels the previous request if a new one comes in
      // should be merged from here
      switchMap((debouncedValue) => {
        const param = (debouncedValue.target! as HTMLInputElement).value;
        return fromFetch(
          `https://musicbrainz.org/ws/2/recording?query=${param}&offset=${"0"}&fmt=json`
        );
      }),
      switchMap((response) => {
        // setIsLoading(false);
        if (response.ok) {
          // OK return data
          return response.json();
        } else {
          // Server is returning a status requiring the client to try something else.
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError((err) => {
        // Network or other error, handle appropriately
        console.error(err);
        throw new Error(err.message);
        // return of({ error: true, message: err.message });
      })
    );
    const inputSubscription = changes.subscribe({
      next: (data) => setFetchedData(data),
      error: (error) => {
        setIsLoading(false);
        setError(error);
      },
      complete: () => setIsLoading(false),
    });

    return () => {
      inputSubscription.unsubscribe();
      scrollSubscription.unsubscribe();
    };
  }, [fetchedData, setError, setFetchedData, setIsLoading]);

  return (
    <div className={styles.container}>
      <div className={styles.appTitle}>RXJs Music Searcher</div>
      <input
        type="text"
        placeholder="Enter part of title/artist name"
        id="searchInput"
        className={styles.searchInput}
        required
        spellCheck="false"
      />
    </div>
  );
}

export default QueryInput;
