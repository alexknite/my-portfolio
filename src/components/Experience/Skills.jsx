import React from "react";

import styles from "../../styles/Experience.module.css";

export const Skills = ({ skill: { imageSrc, title } }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillsImageContainer}>
        <img src={imageSrc} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};
