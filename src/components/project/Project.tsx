import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./project.module.css";

const Project = ({
  projects,
  currentProject,
  setOpen,
  activeProjectId,
  setActiveProjectId,
}: {
  projects: any;
  currentProject: any;
  setOpen: any;
  activeProjectId: any;
  setActiveProjectId: any;
}) => {
  // Get project content from Portfolio
  // Get specific project... Whcih one is selected?
  let selectedProject = projects[activeProjectId];
  const handleClick = () => {
    setActiveProjectId(null);
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link
          href={`https://${selectedProject.url}`}
          target="_blank"
          className={styles.url}
        >
          <h3>{selectedProject.url}</h3>
        </Link>
        <div className={styles.comments}>
          <Link
            href={`https://${selectedProject.github}`}
            className={styles.github}
          >
            <span>{`// view repo on github`}</span>
          </Link>
          <span
            className={styles.comment}
          >{`// or click below to view live!`}</span>
        </div>

        <Link
          href={`https://${selectedProject.url}`}
          className={styles.imgContainer}
          target="_blank"
        >
          <Image
            src={selectedProject.imageSrc}
            alt={selectedProject.imageAlt}
            fill
            className={styles.image}
          />
          <h4 className={styles.viewText}>view live!</h4>
        </Link>
        <Link href={`https://${selectedProject.github}`} target="_blank">
          <Image
            src="/github-icon-grey.png"
            alt="Github icon"
            width="50"
            height="50"
            className={styles.icon}
          />
        </Link>
        <span
          className={styles.exit}
          onClick={() => {
            setOpen(false);
          }}
        >
          x
        </span>
      </div>
    </div>
  );
};

export default Project;
