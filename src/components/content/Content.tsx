import React from "react";
import Portfolio from "../portfolio/Portfolio";
import About from "../about/About";
import Contact from "../contact/Contact";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import styles from "./content.module.css";
// for browsers that don't support simblebar
// import ResizeObserver from "resize-observer-polyfill";
// window.ResizeObserver = ResizeObserver;

const Content = ({ content }: { content: any }) => {
  // I need to get content in here from Tabs
  return (
    <div className={styles.container}>
      <SimpleBar className={styles.simplebar}>
        <div>
          {content === "Portfolio" && <Portfolio />}
          {content === "About" && <About />}
          {content === "Contact" && <Contact />}
        </div>
      </SimpleBar>
    </div>
  );
};

export default Content;
