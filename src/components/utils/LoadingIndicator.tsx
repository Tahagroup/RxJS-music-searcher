import React from "react";
import styles from "./LoadingIndicator.module.css";
function LoadingIndicator() {
  return (
    <div className={styles["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingIndicator;
