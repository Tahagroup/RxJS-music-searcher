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

  function doFetch(query: string, offset: number) {
    return fromFetch(
      `https://musicbrainz.org/ws/2/recording?query=${searchText.current!}&offset=${offset}&fmt=json`
    ).pipe(
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
  }
  useEffect(() => {
    // create observables using fromEvent - should be placed inside useEffect so HTML elements exist
    const scrollChanges$ = fromEvent(window, "scroll");
    const inputChanges$ = fromEvent(
      document.querySelector("#searchInput")!,
      "input"
    );
    const scrollPipe = scrollChanges$.pipe(
      filter((_) => {
        const thereIsMoreData =
          fetchedData!.count !== fetchedData!.recordings.length;
        if (!thereIsMoreData) {
          setIsLoading(false);
        }
        // we want only scrolls to the end of screen and if there is more data to be fetched on scroll
        return (
          window.innerHeight + document.documentElement.scrollTop + 0.2 >=
            document.documentElement.offsetHeight && thereIsMoreData
        );
      }),
      switchMap((value) => {
        setIsLoading(true);
        offset.current = offset.current + 25;
        return doFetch(searchText.current, offset.current);
      })
    );
    const scrollSubscription = scrollPipe.subscribe({
      next: (data) => {
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
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////

    const changes = inputChanges$.pipe(
      debounceTime(1000),
      tap((event) => {
        searchText.current = (event.target as HTMLInputElement).value;
        if (searchText.current === "") {
          setFetchedData(undefined);
          setIsLoading(false);
        }
        setError(undefined);
      }),
      filter((event) => (event.target as HTMLInputElement).value.trim() !== ""),
      // switchMap cancels the previous request if a new one comes in
      switchMap((debouncedValue) => {
        setIsLoading(true);
        const param = (debouncedValue.target! as HTMLInputElement).value;
        return doFetch(param, 0);
      })
    );
    const inputSubscription = changes.subscribe({
      next: (data) => {
        setFetchedData(data);
        setIsLoading(false);
      },
      error: (error) => {
        setIsLoading(false);
        setError(error);
      },
    });

    return () => {
      inputSubscription.unsubscribe();
      scrollSubscription.unsubscribe();
    };
    // setError, setFetchedData, setIsLoading are state changing
    // functions and never change
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
