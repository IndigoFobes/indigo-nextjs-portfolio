import React, { Dispatch } from "react";
import styles from "./tabs.module.css";

const Tabs = ({
  content,
  setContent,
}: {
  content: string;
  setContent: Dispatch<React.SetStateAction<string>>;
}) => {
  // When I click a tab, I want to set the state...
  // this state will have to pass to Content

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={`${styles.tab} ${
            content === "Portfolio" ? styles.active : ""
          }`}
          onClick={() => {
            setContent("Portfolio");
          }}
        >
          <h4>portfolio</h4>
        </div>
        <div
          className={`${styles.tab} ${
            content === "About" ? styles.active : ""
          }`}
          onClick={() => {
            setContent("About");
          }}
        >
          <h4>about me</h4>
        </div>
        <div
          className={`${styles.tab} ${
            content === "Contact" ? styles.active : ""
          }`}
          onClick={() => {
            setContent("Contact");
          }}
        >
          <h4>contact</h4>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
