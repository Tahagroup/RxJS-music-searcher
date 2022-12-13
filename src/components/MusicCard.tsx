import React from "react";
import styles from "./MusicCard.module.css";

interface propTypes {
  music: any;
}
function MusicCard({ music }: propTypes) {
  if (music.releases === undefined) {
    console.log(music.releases + JSON.stringify(music));
  }

  return (
    <div className={styles.flexWrapper}>
      <div className={styles.main}>
        <div>💯score: {music.score}</div>
        <strong>{music.title}</strong>
      </div>
      <div className={styles.secondary}>
        <div>🎸artist: {music["artist-credit"][0].name}</div>
        {music.releases && (
          <>
            <div>📅{music.releases[0].date}</div>
            <div>🌍country: {music.releases[0].country}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default MusicCard;
