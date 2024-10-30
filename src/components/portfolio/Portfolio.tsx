"use client";

import React, { useState } from "react";
import Project from "../project/Project";
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
    imageSrc: "/indigo-green-square.jpg",
    imageAlt: "Placeholder image.",
  },
  {
    id: 1,
    title: "indigoFobes",
    tech: ["Nextjs", "typescript"],
    url: "www.indigofobes.com",
    github: "www.jacob-millman.com",
    imageSrc: "/indigo-green-square.jpg",
    imageAlt: "Placeholder image.",
  },
  {
    id: 2,
    title: "jamesBlog",
    tech: ["Nextjs", "typescript"],
    url: "coming soon",
    github: "www.jacob-millman.com",
    imageSrc: "/indigo-green-square.jpg",
    imageAlt: "Placeholder image.",
  },
];

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [clickedId, setClickedId] = useState<number | null>(null);
  // var clickedProject;
  // var clickedUrl: string;

  const handleClick = (project: object) => {
    // console.log(project.id);
    // setCurrentProject(project);
    setOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Need to get clickedUrl (and full clickedProject) value, but it's outside of the map function */}
        {open && (
          <Project
            setOpen={setOpen}
            clickedId={clickedId}
            projects={projects}
          />
        )}

        {projects.map((singleProject) => {
          const techAsString = singleProject.tech.join(", ");

          return (
            <div
              key={singleProject.id}
              className={styles.project}
              onClick={() => {
                // clickedProject = JSON.stringify(singleProject);
                setClickedId(singleProject.id);
                console.log(`clicked project: ${singleProject.url}`);
                console.log(`id: ${singleProject.id}`);
                setOpen(true);
              }}
            >
              <span>{`>`}</span>
              <div className={styles.projectText}>
                <span
                  className={styles.projectContent}
                >{`${singleProject.title} = {`}</span>
                <span className={styles.indent}>{`tech: ${techAsString}`}</span>
                <span
                  className={styles.indent}
                >{`url: ${singleProject.url}`}</span>
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
