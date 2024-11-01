import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3>{`## About Me`}</h3>
        <p>{`Hi there! My name is Indigo. I am a full stack web developer based in NYC. I got certified in web development in December 2022, after taking Georgia Tech’s Full Stack Web Development bootcamp. Since then, I have been building websites for individual clients, along with working in various fields for a couple of different companies. I enjoy being creative, solving problems, working with others, and using the gifts God has given me to build beautiful things and serve people, while pointing to His Kingdom and goodness. Other things I enjoy include: performing on stage (I got my BFA in Musical Theatre from Texas Christian University in 2021), cooking, running, sewing, learning instruments, trying to speak Spanish, and jumping into bodies of water. Thanks for taking the time to read this and get to know a bit about me. Please, feel free to reach out and start a conversation! `}</p>
      </div>
      <div className={styles.section}>
        <h3>{`## Skills`}</h3>
        <p>{`My current skills include html, css, javascript, react, node.js, next.js, prisma, mongoDB, mySQL, tailwind. Other skills include figma, illustrator, photoshop, and learning new skills!`}</p>
      </div>
      <div className={styles.section}>
        <h3>{`## Resume`}</h3>
        <p>{`Click here to download my resume! (coming soon!)`}</p>
      </div>
    </div>
  );
};

export default About;
