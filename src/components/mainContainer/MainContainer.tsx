import Image from "next/image";
import React from "react";
import styles from "./mainContainer.module.css";

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/indigo-green-square.jpg"
          alt="Indigo smiling with green shirt."
          width="200"
          height="200"
          className={styles.image}
        />
      </div>
      <h1 className={styles.title}>INDIGO FOBES</h1>
      <div className={styles.wrapper}>
        <h2 className={styles.subtitle}>WEB DEV PORTFOLIO</h2>
        {/* content component */}
        <div className={styles.content}>
          {/* Component is dependent on what tab is selected */}
          {/* Probably will nee useState to determine which component to show... options will be portfolio, single project, about, contact */}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
