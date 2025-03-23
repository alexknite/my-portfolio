import React from "react";

import styles from "../../styles/Experience.module.css";

export const History = ({
  historyItem: {
    imageSrc,
    organisation,
    role,
    startDate,
    endDate,
    experiences,
  },
}) => {
  return (
    <li className={styles.historyItem}>
      <img src={imageSrc} alt={`${organisation} logo`} />
      <div className={styles.historyItemDetails}>
        <h3>{`${role}, ${organisation}`}</h3>
        <p>{`${startDate} - ${endDate}`}</p>
        <ul>
          {experiences.map((experience, id) => {
            return <li key={id}>{experience}</li>;
          })}
        </ul>
      </div>
    </li>
  );
};
