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
    url: "www.jacob-millman.com",
    github: "www.jacob-millman.com",
    imageSrc: "/indigo-green-square.jpg",
    imageAlt: "Placeholder image.",
  },
  {
    id: 2,
    title: "jamesBlog",
    tech: ["Nextjs", "typescript"],
    url: "www.jacob-millman.com",
    github: "www.jacob-millman.com",
    imageSrc: "/indigo-green-square.jpg",
    imageAlt: "Placeholder image.",
  },
];

const Portfolio = () => {
  // console.log(`Projects: ${projects[0].title}`);
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {open && (
          <Project
            projects={projects}
            currentProject={currentProject}
            setOpen={setOpen}
            activeProjectId={activeProjectId}
            setActiveProjectId={setActiveProjectId}
          />
        )}

        {projects.map((project) => {
          const techAsString = project.tech.join(", ");
          const handleClick = (projectId: number) => {
            setCurrentProject(project.id);
            setActiveProjectId(project.id);
            setOpen(true);
            // console.log(`project: ${project}`);
            console.log(`active project id: ${project.id}`);
          };

          return (
            <div
              key={project.id}
              className={styles.project}
              onClick={() => {
                handleClick(project.id);
              }}
            >
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
