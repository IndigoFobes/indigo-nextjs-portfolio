"use client";

import React, { useState } from "react";
import Portfolio from "../portfolio/Portfolio";
import About from "../about/About";
import Contact from "../contact/Contact";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import styles from "./content.module.css";
// for browsers that don't support simblebar
// import ResizeObserver from "resize-observer-polyfill";
// window.ResizeObserver = ResizeObserver;

const Content = () => {
  const [content, setContent] = useState("Portfolio");
  return (
    <div className={styles.container}>
      <SimpleBar className={styles.simplebar}>
        <div>
          {content === "Portfolio" ? (
            <Portfolio />
          ) : (
            <>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda enim, perferendis dolorum, illum ipsum ex nemo delectus
              odio eius, cupiditate quae? Nemo deserunt ducimus earum laborum
              iure id quidem sed? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla ducimus provident soluta nemo neque
              repellendus animi aperiam eligendi fuga velit, ratione repudiandae
              placeat in possimus blanditiis at repellat autem aspernatur! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Earum, quos.
              Placeat quae debitis officiis, ipsam repellendus sit voluptas
              quis! Officia, laudantium. Maiores consequuntur numquam
              repellendus porro hic consectetur laborum molestiae.
            </>
          )}
        </div>
      </SimpleBar>
    </div>
  );
};

export default Content;
