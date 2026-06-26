import React from "react";
import styles from './SearchSection.module.css';
import { useTheme } from '../Acessibility/AltoContraste/ThemeContext';

function SearchServices() {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? '#666666' : 'white',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  const inputStyle = {
    backgroundColor: highContrast ? '#666666' : 'white',
    color: highContrast ? 'white' : 'black',
    borderColor: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  const placeholderStyle = `
    ::placeholder {
      color: ${highContrast ? 'lightgray' : 'gray'};
    }
  `;

  return (
    <main className={styles.container}>
      <section className={styles.heroSection}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e028a329f2ba5510a71e9739cd605a862371a91a926cd8c19f178455f8bdfedb?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
          className={styles.backgroundImage} 
          alt=""
        />
        <div style={sectionStyle} className={styles.searchBox}>
          <h1 className={styles.title}>Pesquisa de Serviços</h1>
          <form>
            <label htmlFor="cepInput" className={styles['visually-hidden']}>Pesquise por CEP</label>
            <input 
              type="text" 
              id="cepInput" 
              className={styles.inputField}
              style={inputStyle}
              placeholder="Pesquise por CEP" 
              aria-label="Pesquise por CEP"
            />
            <style>{placeholderStyle}</style>
            <label htmlFor="serviceInput" className={styles['visually-hidden']}>Lista de Serviços</label>
            <input 
              type="text" 
              id="serviceInput" 
              className={styles.inputField}
              style={inputStyle}
              placeholder="Lista de Serviços" 
              aria-label="Lista de Serviços"
            />
            <style>{placeholderStyle}</style>
            <button type="submit" className={styles.searchButton}>Pesquisar</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SearchServices;