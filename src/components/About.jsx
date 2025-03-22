import React from "react";

import styles from '../styles/About.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/public/assets/about/memoji_computer.jpg"
          alt="me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/public/assets/about/cursorIcon.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>Blah blah blah</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/public/assets/about/serverIcon.png" alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>Blah blah blah</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/public/assets/about/uiIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>Blah blah blah</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
