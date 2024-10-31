"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./project.module.css";

const Project = ({
  setOpen,
  clickedId,
  projects,
}: {
  setOpen: any;
  clickedId: any;
  projects: any;
}) => {
  var clickedProject = projects[clickedId];
  //   console.log(`project: ${activeProject}`);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {clickedProject.url ? (
          <Link
            href={`https://${clickedProject.url}`}
            target="_blank"
            className={styles.url}
          >
            <h3>{clickedProject.url}</h3>
          </Link>
        ) : (
          <span
            className={styles.title}
          >{`${clickedProject.title}... url coming soon!`}</span>
        )}

        <div className={styles.comments}>
          <Link
            href={`https://${clickedProject.github}`}
            className={styles.github}
            target="_blank"
          >
            {clickedProject.github && <span>{`// view repo on github`}</span>}
          </Link>
          <span>{`// click below to view live!`}</span>
        </div>
        {clickedProject.url ? (
          <Link
            href={`https://${clickedProject.url}`}
            className={styles.imgContainer}
            target="_blank"
          >
            <Image
              src={clickedProject.imageSrc}
              alt={clickedProject.imageAlt}
              fill
              className={styles.image}
            />
            <h4 className={styles.viewText}>view live!</h4>
          </Link>
        ) : (
          <div className={styles.imgContainer}>
            <Image
              src={clickedProject.imageSrc}
              alt={clickedProject.imageAlt}
              fill
              className={styles.imageNoUrl}
            />
          </div>
        )}

        <p className={styles.desc}>
          <span>{`// `}</span>
          {clickedProject.desc}
        </p>
        {clickedProject.github && (
          <Link href={`https://${clickedProject.github}`} target="_blank">
            <Image
              src="/github-icon-grey.png"
              alt="Github icon"
              width="50"
              height="50"
              className={styles.icon}
            />
          </Link>
        )}

        <span
          className={styles.exit}
          onClick={() => {
            setOpen(false);
          }}
        >
          x
        </span>
        <span
          className={styles.exit}
          onClick={(e) => {
            e.preventDefault();
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
