import styles from './HomeHero.module.css';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';

function HomeHero() {
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc8d2cf535b143471ca1c7c38209ea068458fa64d08fa84b422c2d8a78f9b4ac?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
          className={styles.heroImage} 
          alt="Urban cleaning background" 
        />
        <div className={`${styles.textContainer} ${ highContrast ? styles.highContrastTextContainer : ''}`}>
          <h1 className={styles.heroTitle}>Geo-SO, especialista em limpeza urbana</h1>
          <a href="/sobre"><button className={styles.ctaButton}>Saiba Mais!</button></a>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;