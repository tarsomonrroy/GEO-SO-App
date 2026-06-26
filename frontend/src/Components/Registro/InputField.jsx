/* eslint-disable react/prop-types */
import styles from './InputField.module.css';
import * as React from "react";
import { useTheme } from '../Acessibility/AltoContraste/ThemeContext';

function InputField({ label, type, id }) {
  const { highContrast } = useTheme();

  const inputStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    borderColor: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  // Estilo para o placeholder
  const placeholderStyle = `
    ::placeholder {
      color: ${highContrast ? 'lightgray' : 'gray'};
    }
  `;

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.visuallyHidden}>{label}</label>
      <input
        type={type}
        id={id}
        className={styles.inputField}

        style={inputStyle}
        placeholder={label}
        aria-label={label}
      />


      <style jsx>{`
        .input-wrapper {
          display: flex;
          flex-direction: column;
        }

        .input-field {
          background-color: #fff;
          padding: 8px 14px;
          border: 1px solid rgba(0, 0, 0, 0.5);
          line-height: 1.6;
          font: inherit;
          min-height: 48px;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        @media (max-width: 991px) {
          .input-field {
            padding-right: 20px;
          }
        }
      `}</style>

      <style>{placeholderStyle}</style>
    </div>
  );
}

export default InputField;