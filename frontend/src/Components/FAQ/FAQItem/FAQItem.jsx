import React from 'react';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';
import styles from '../FAQList/FAQList.module.css';

const AccordionItem = ({ title }) => {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  const iconStyle = {
    filter: highContrast ? 'brightness(0) invert(1)' : 'none',
    transition: 'filter 0.5s ease',
  };

  return (
    <div style={sectionStyle} className={styles.accordionItem}>
      <div className={styles.accordionTitle}>
        <h3 className={styles.title}>{title}</h3>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f10e1d095a3de92b7e2cb7c7a6aece65f801c6828bb3a013de45400e47cae40d?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" style={iconStyle} className={styles.icon} alt="" />
      </div>
    </div>
  );
};

export default AccordionItem;