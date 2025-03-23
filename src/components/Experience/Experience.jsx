import React from "react";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "../../styles/Experience.module.css";
import { Skills } from "./Skills";
import { History } from "./History";

export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return <History key={id} historyItem={historyItem} />;
          })}
        </ul>
        <h3 className={styles.subtitle}>Programming Languages</h3>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return <Skills key={id} skill={skill} />;
          })}
        </div>
      </div>
    </section>
  );
};
