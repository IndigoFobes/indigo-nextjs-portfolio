import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3>{`## About Me`}</h3>
        <p>{`Hey there! My name is Indigo! I am a full stack web developer based in NYC. I got certified in December 2022 after taking Georgia Tech’s Full Stack Web Development bootcamp. I learned SO much. And I still have MUCH to learn. I absolutely love learning, so I’m not bummed about it. Etc.`}</p>
      </div>
      <div className={styles.section}>
        <h3>{`## Skills`}</h3>
        <p>{`My current skills include html, css, javascript, react, nodeje, nextjs, prisma, mongodb, mySQL, tailwind, etc. Other skills include figma, illustrator, and photoshop.`}</p>
      </div>
      <div className={styles.section}>
        <h3>{`## Resume`}</h3>
        <p>{`Click here to download my resume!`}</p>
      </div>
    </div>
  );
};

export default About;
