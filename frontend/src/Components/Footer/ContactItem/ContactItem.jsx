import React from 'react';
import styles from '../Footer/Footer.module.css';

const ContactItem = ({ iconSrc, text }) => (
  <div className={styles.contactItem}>
    <img loading="lazy" src={iconSrc} alt="" className={styles.icon} />
    <div>{text}</div>
  </div>
);

export default ContactItem;