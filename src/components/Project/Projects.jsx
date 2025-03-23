import React from "react";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "../../styles/Projects.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Repositories</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
