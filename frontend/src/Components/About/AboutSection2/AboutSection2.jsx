import styles from './AboutSection2.module.css';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';

function AboutSection2() {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <section style={sectionStyle} className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Nosso Compromisso
            </h2>
            <p className={styles.description}>
            Além dos serviços de consultoria, nosso compromisso com a transparência e responsabilidade social é refletido em nossa plataforma pública. Disponibilizamos informações detalhadas sobre as áreas de limpeza urbana para todos, permitindo que a população acesse dados em tempo real sobre os pontos de coleta e limpeza. Com isso, buscamos criar um espaço mais consciente, promovendo a colaboração entre cidadãos, empresas e gestores públicos para um futuro urbano mais limpo.
            </p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6141348e3985796e012e880db5bbeb501d42991f692fe3cb4a023875eda057cd?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" 
            className={styles.image} 
            alt="Illustrative image for the about section"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection2;