import React from "react";
import styles from "./portfolio.module.css";

export interface Project {
  title: string;
  tech: string[];
  url: string;
  github: string;
  imageSrc: string;
  imageAlt: string;
  id: number;
}

const projects: Project[] = [
  {
    id: 0,
    title: "jacobMillman",
    tech: ["Nextjs", "typescript"],
    url: "www.jacob-millman.com",
    github: "www.jacob-millman.com",
    imageSrc: "indigo-green-square.jpg",
    imageAlt: "Placeholder image.",
  },
  {
    id: 1,
    title: "jacobMillman",
    tech: ["Nextjs", "typescript"],
    url: "www.jacob-millman.com",
    github: "www.jacob-millman.com",
    imageSrc: "indigo-green-square.jpg",
    imageAlt: "Placeholder image.",
  },
  {
    id: 2,
    title: "jacobMillman",
    tech: ["Nextjs", "typescript"],
    url: "www.jacob-millman.com",
    github: "www.jacob-millman.com",
    imageSrc: "indigo-green-square.jpg",
    imageAlt: "Placeholder image.",
  },
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {projects.map((project) => {
          const techAsString = project.tech.join(", ");
          return (
            <div key={project.id} className={styles.project}>
              <span>{`>`}</span>
              <div className={styles.projectText}>
                <span
                  className={styles.projectContent}
                >{`${project.title} = {`}</span>
                <span className={styles.indent}>{`tech: ${techAsString}`}</span>
                <span className={styles.indent}>{`url: ${project.url}`}</span>
                <span>{`}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
