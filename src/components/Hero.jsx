import React from "react";
import styles from "../styles/Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Alex</h1>
        <p className={styles.description}>
          I am an undergraduate student research at California State, Monterey Bay studying Kinesiology and Computer Science! Reach out if you want to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:me@alexnite.com">
          Contact Me
        </a>
      </div>

      <img
        className={styles.heroImg}
        src="public/assets/hero/memoji.png"
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
