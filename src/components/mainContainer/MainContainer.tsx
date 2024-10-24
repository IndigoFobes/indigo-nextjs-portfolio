import React from "react";
import styles from "./mainContainer.module.css";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>INDIGO FOBES</h1>
      <div className={styles.wrapper}>
        <h2>WEB DEV PORTFOLIO</h2>
      </div>
    </div>
  );
};

export default MainContainer;
