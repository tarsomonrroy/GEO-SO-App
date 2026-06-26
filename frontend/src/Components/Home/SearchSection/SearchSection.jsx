
import React from "react";
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';
import styles from './SearchServices.module.css';

function SearchServices() {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <section style={sectionStyle} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textColumn}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Pesquisa de Serviços</h1>
            <p className={styles.description}>
              Vizualize os pontos de limpeza urbana próximo de você!
            </p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c04504347e6115155efdc9d42f3140f2aecda75c6a6c4daaf00b786719da268?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
            className={styles.image} 
            alt="Ilustração de serviços de limpeza urbana"
          />
        </div>
      </div>
      <button className={styles.searchButton}>
        Procure por serviços na sua região!
      </button>
    </section>
  );
}

export default SearchServices;