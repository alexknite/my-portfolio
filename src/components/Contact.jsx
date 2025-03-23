import React from "react";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import styles from "../styles/Contact.module.css";

export const Contact = () => {
  return (
    <>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Say hello!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:me@alexnite.com">me@alexnite.com</a>
          </li>
          <li className={styles.link}>
            <FaLinkedin className={styles.icon} />
            <a href="https://linkedin.alexnite.com">
              https://linkedin.alexnite.com
            </a>
          </li>
          <li className={styles.link}>
            <FaGithub className={styles.icon} />
            <a href="https://github.alexnite.com">
              https://github.alexnite.com
            </a>
          </li>
        </ul>
      </footer>
      <p className={styles.credits}>Made with ❤️ by alexnite</p>
    </>
  );
};
