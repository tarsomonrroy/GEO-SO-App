import styles from './Footer.module.css';
import ContactItem from '../ContactItem/ContactItem';
import SocialIcon from '../SocialIcon/socialIcon';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';

const Footer = () => {
  const socialIcons = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/bbb920c589084f08d137cfea907e1cc23329d062d6de8972ea54dd468d432de6?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/64b082cf2e9cdcfc0ce24c587a118398dabbe8fad2505b50e71adfec0ba5063b?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/2e1f3a42bf747c388cc061331b9ce9a9125b1c7267a873c118538bd9b71b4038?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d'
  ];

  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? '#00633f' : '#00d084',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <footer style={sectionStyle} className={styles.footer}>
      <div className={styles.copyright}>
        © 2024 Geo-SO. Todos os direitos reservados.
        <br />
        Desenvolvido por GReeeeN Devs
      </div>
      <div className={styles.contactWrapper}>
        <ContactItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cf87ba0ccc05b8c0098751f1a1e20643700afeafed8ab63ccadd9c0c3a7bc8b6?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d"
          text="(11) 95211-9988"
        />
        <div className={styles.socialIcons}>
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} iconSrc={icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;