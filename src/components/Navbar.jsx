import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { IoMdClose, IoIosMenu } from "react-icons/io";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoMdClose className={styles.menuBtn} />
          ) : (
            <IoIosMenu className={styles.menuBtn} />
          )}
        </div>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="assets/A_Nite_CV.pdf">CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
