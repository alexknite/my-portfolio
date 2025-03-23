import React from "react";

import styles from "../../styles/About.module.css";
import about, {items} from "../../data/about.json";
import { AboutItem } from "./AboutItem";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={about.imageSrc}
          alt="me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {items.map((item, id) => {
            return <AboutItem key={id} item={item} />
          })}
        </ul>
      </div>
    </section>
  );
};
