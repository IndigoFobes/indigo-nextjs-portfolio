"use client";

// import { Project } from "next/dist/build/swc/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "../portfolio/Portfolio";
import styles from "./project.module.css";

const SingleProjectComponent = ({
  setOpen,
  clickedId,
  projects,
}: {
  setOpen: Function;
  clickedId: number;
  projects: Array<Project>;
}) => {
  var clickedProject = projects[clickedId];
  var stringed = JSON.stringify(projects);
  console.log(`STRINGED: ${stringed}`);
  console.log(`clicked project: ${projects[clickedId].url}`);
  // console.log(`clicked project: ${stringed[clickedId]}`);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* URL */}
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
        {/* FIRST TWO COMMENTS: GITHUB AND CLICK BELOW */}
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
          // IMAGE WITH URL
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
          // IMAGE WITHOUT URL
          <div className={styles.imgContainer}>
            <Image
              src={clickedProject.imageSrc}
              alt={clickedProject.imageAlt}
              fill
              className={styles.imageNoUrl}
            />
          </div>
        )}
        {/* 3RD COMMENT: DESCRIPTION*/}
        <p className={styles.desc}>
          <span>{`// `}</span>
          {clickedProject.desc}
        </p>
        {/* GITHUB ICON WITH LINK */}
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
        {/* CLOSE BUTTON */}
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

export default SingleProjectComponent;
