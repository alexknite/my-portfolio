import React from "react";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import styles from "../styles/Contact.module.css";

export const Contact = () => {
  return (
    <>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>
            Say hello! <span className={styles.wave}>👋</span>
          </p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:me@alexnite.com">me@alexnite.com</a>
          </li>
          <li className={styles.link}>
            <FaLinkedin className={styles.icon} />
            <a href="https://www.linkedin.com/in/alexknite/">
              linkedin.com/in/alexknite
            </a>
          </li>
          <li className={styles.link}>
            <FaGithub className={styles.icon} />
            <a href="https://github.com/alexknite">github.com/alexknite</a>
          </li>
        </ul>
      </footer>
      <div className={styles.credits}>
        <p>Made with ❤️ by alexnite</p>
        <p>Color design 🎨 by beau</p>
      </div>
    </>
  );
};
