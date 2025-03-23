import React from 'react'

import styles from '../../styles/About.module.css';

export const AboutItem = ({item: {imageSrc, title, description}}) => {
  return (
    <li className={styles.aboutItem}>
      <img src={imageSrc} alt={title} />
      <div className={styles.aboutItemText}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>


  )
}

