import React from "react";
import styles from "../styles/Hero.module.css";
import hero from "../data/hero.json";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm {hero.name}</h1>
        <p className={styles.description}>
          {hero.description}
        </p>
        <a className={`${styles.contactBtn} ${styles.glowOnHover}`} href={`mailto:${hero.email}`}>
          Contact Me
        </a>
      </div>

      <img
        className={styles.heroImg}
        src={hero.imgSrc}
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
