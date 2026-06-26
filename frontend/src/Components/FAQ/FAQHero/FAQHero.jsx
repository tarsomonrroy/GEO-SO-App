
import React from "react";
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';
import styles from './FAQHero.module.css';

function FAQHero() {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <section style={sectionStyle} className={styles.hero}>
      <div className={styles.heroContent}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28455810ea23c6acf94ef0c935faba716ddd58da3b7ad29808a2c4f926ffe70?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
          className={styles.heroImage} 
          alt="Background image for Frequently Asked Questions"
        />
        <h1 className={styles.heroTitle}>Perguntas Frequentes</h1>
      </div>
    </section>
  );
}

export default FAQHero;