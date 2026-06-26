import styles from '../ServicesSection/ServicesSection.module.css';

const ServiceList = ({ services }) => (
  <ul className={styles.serviceList}>
    {services.map((service, index) => (
      <li key={index}>{service}</li>
    ))}
  </ul>
);

export default ServiceList;