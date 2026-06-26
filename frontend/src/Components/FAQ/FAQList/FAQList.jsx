import React from 'react';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';
import AccordionItem from '../FAQItem/FAQItem';
import styles from './FAQList.module.css';

const FAQList = () => {
  const questions = [
    "Pergunta ?",
    "Pergunta ?",
    "Pergunta ?",
    "Pergunta ?"
  ];

  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <section style={sectionStyle} className={styles.services}>
      <div className={styles.accordion}>
        {questions.map((question, index) => (
          <AccordionItem key={index} title={question} />
        ))}
      </div>
    </section>
  );
};

export default FAQList;