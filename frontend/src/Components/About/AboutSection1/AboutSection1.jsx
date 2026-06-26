import styles from './AboutSection1.module.css';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';

function AboutSection1() {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <section style={sectionStyle} className={styles.about}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/276bfe8f759dc0750a4771608535aba0baeeb0fc610afd1e05ae6e4dbabfc9b4?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
            className={styles.image} 
            alt="Illustrative image for the about section"
          />
        </div>
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Sobre Nós</h2>
            <p className={styles.description}>
            Na GeoSO Soluções Ambientais, somos especialistas em consultoria de serviços de limpeza urbana, oferecendo soluções completas para empresas e órgãos públicos. Nossa equipe desenvolve e gerencia roteiros de limpeza personalizados, otimizando recursos e garantindo eficiência nas operações. Trabalhamos lado a lado com nossos clientes para criar um ambiente mais limpo e sustentável, focando em estratégias que maximizem os resultados e reduzam os impactos ambientais.


            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection1;