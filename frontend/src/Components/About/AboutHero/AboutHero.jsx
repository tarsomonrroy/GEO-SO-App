import React from 'react';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';
import styles from './AboutHero.module.css';

const AboutHero = () => {
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7a411807a254f94aa42f3a62ef355fb30ec0b7baf728c8270991d1c3b8a071?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
          className={styles.heroImage} 
          alt=""
        />
        <h1 className={styles.heroTitle}>Sobre Nós</h1>
      </div>
    </section>
  );
};

export default AboutHero;