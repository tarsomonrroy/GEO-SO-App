import React from 'react';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ iconSrc, title, description }) => {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  // Filtro para alterar a cor do ícone
  const iconStyle = {
    filter: highContrast ? 'brightness(0) invert(1)' : 'none',
    transition: 'filter 0.5s ease',
  };

  return (
    <article style={sectionStyle} className={styles.serviceCard}>
      <img src={iconSrc} alt="" style={iconStyle} className={styles.serviceIcon} />
      <div className={styles.serviceContent}>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;