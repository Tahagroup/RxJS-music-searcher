import React from "react";
import MusicCard from "./MusicCard";
import styles from "./Results.module.css";
interface propsType {
  fetchedData: responseType;
}
function Results(props: propsType) {
  const numberFormatter = Intl.NumberFormat("en-US");
  const formatted = numberFormatter.format(props.fetchedData.count);
  return (
    <>
      <div className={styles.resultWrapper}>
        <span className={styles.resultCount}>
          {formatted} results were found
        </span>
      </div>
      <div className={styles.cardsWrapper}>
        {props.fetchedData.recordings.map((music: any) => (
          <MusicCard key={music.id} music={music} />
        ))}
      </div>
    </>
  );
}

export default Results;
