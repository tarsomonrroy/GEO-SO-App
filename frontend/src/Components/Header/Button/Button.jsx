/* eslint-disable react/prop-types */
import styles from '../Header/Header.module.css';

function Button({ variant, text }) {
  const buttonClass = variant === 'outlined' ? styles.outlinedButton : styles.filledButton;
  const textClass = variant === 'outlined' ? styles.buttonText : styles.filledButtonText;

  return (
    <button className={buttonClass}>
      <span className={textClass}>{text}</span>
    </button>
  );
}

export default Button;