import React from "react";
import styles from "./tabs.module.css";

const Tabs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tab}>
          <h4>portfolio</h4>
        </div>
        <div className={styles.tab}>
          <h4>about me</h4>
        </div>
        <div className={styles.tab}>
          <h4>contact</h4>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
