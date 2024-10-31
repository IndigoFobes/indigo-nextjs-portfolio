"use client";

import React, { useState } from "react";
import Project from "../project/Project";
import styles from "./portfolio.module.css";

export interface Project {
  title: string;
  tech: string[];
  url?: string;
  github?: string;
  imageSrc: string;
  imageAlt: string;
  desc: string;
  id: number;
}

const projects: Project[] = [
  {
    id: 0,
    title: "jacobMillman",
    tech: ["Nextjs", "Typescript", "Vercel"],
    url: "www.jacob-millman.com",
    github: "github.com/IndigoFobes/jacob-millman",
    imageSrc: "/jacob-millman-screenshot.jpg",
    imageAlt: `Headshot and Resume page of Jacob's site`,
    desc: "I built this website for an actor, using Next.js. This was my first application done with Next.js. My goal with this was to create my own template that I could reuse to create affordable sites for actors. Because I was creating a template I wanted to keep using, I tried my best to keep my code as clean and concise as possible. I wanted it to be as easy as possible for myself going forward. This process taught me how to implement components for clear and smooth code.",
  },
  {
    id: 1,
    title: "indigoFobes",
    tech: ["Nextjs", "Typescript", "Vercel"],
    url: "www.indigofobes.com",
    github: "github.com/IndigoFobes/indigo-fobes",
    imageSrc: "/indigo-fobes-screenshot.jpg",
    imageAlt:
      "Scroller of images of Indigo in Cats the musical. Main image: Indigo sitting on the stage, as a cat.",
    desc: "I built this website for myself, also an actor! Because I reused my own template from the site I built for Jacob, the process for this one was extremely easy and quick.",
  },
  {
    id: 2,
    title: "phoenixHealthTech",
    tech: ["React", "Nodejs", "Tailwind", "Vercel"],
    url: "www.phoenixhealthtechnology.com/home",
    github: "www.phoenixhealthtechnology.com/home",
    imageSrc: "/phoenix-health.jpg",
    imageAlt:
      "Homepage of Phoenix Health Technology website. Blurry background of clean white couch with small glass tables. Elegant decor.",
    desc: "Though this project never quite got to completion for various reasons, I really enjoyed working on it! This was my first site built entirely via code for a client. The mobile layout is not quite there yet, and certainly some content is missing. Overall, this was a fantastic learning experience for me.",
  },
  {
    id: 3,
    title: "jamesBlog",
    tech: ["Nextjs", "Typescript", "Prisma", "MongoDB"],
    github: "github.com/IndigoFobes/james-blog",
    imageSrc: "/james-blog-screenshot.jpg",
    imageAlt: `James' blog, single post page.`,
    desc: "This project is underway. The backend will involve Prisma and MongoDB. It is currently set up with dummy text and mostly placeholder information. I relied heavily on Figma for the design and sought to implement the actual css as precisely as I could, according to my design.",
  },
  {
    id: 4,
    title: "wineClub",
    tech: ["Velo", "Wix CMS"],
    url: "www.homesteadparks.com",
    imageSrc: "/homestead-wineclub.jpg",
    imageAlt: `James' blog, single post page.`,
    desc: "I did not design or build this website. When I jumped onto the scene, the original developer was no longer on the team. I implemented the wine club system, which required delving into Velo and Wix CMS. I created functionality, within Wix's development platform, that allows a Wine Club member to select two wines each month, based on a tier system. All of the wines in our system each contain a score of 1, 2, or 3, based on their tier. I used logic to make it so that the wine member can choose wine adding up to no more than 4 points. I also created the member dashboard, showing the member's preferences and wine selections, and allowing them to update their information. During this process, I feel like I got very familiar with Velo.",
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
                {singleProject.url && (
                  <div>
                    <span
                      className={styles.indent}
                    >{`url: ${singleProject.url}`}</span>
                    <span>{`}`}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
