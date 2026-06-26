import styles from './LoginForm.module.css';
import * as React from "react";
import { useTheme } from '../Acessibility/AltoContraste/ThemeContext';

export function LoginForm() {
  const { highContrast } = useTheme();

  const sectionStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    borderColor: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  const inputStyle = {
    backgroundColor: highContrast ? 'black' : 'white',
    color: highContrast ? 'white' : 'black',
    borderColor: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };

  return (
    <>
      <main style={sectionStyle} className={styles.loginSection}>
        <form style={sectionStyle} className={styles.loginForm}>
          <h1 className={styles.formTitle}>Acesse sua conta</h1>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.visuallyHidden}>Email</label>
            <input type="email" id="email" style={inputStyle} className={styles.formInput} placeholder="Email" required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.visuallyHidden}>Senha</label>
            <input type="password" id="password" style={inputStyle} className={styles.formInput} placeholder="Senha" required />

          </div>
          
          <button type="submit" className={styles.submitBtn}>Entrar</button>
          
          <a href="#recover" className={styles.recoverLink}>Recuperar senha</a>
          
          <div className={styles.signupPrompt}>
            <span>Ainda não é cadastrado?</span>
            <a href="/registro">Clique aqui!</a>
          </div>
          <div className={styles.signupPromptEx}>
            <a href="/registro">Clique aqui!</a>
          </div>
        </form>
      </main>

      <style jsx>{`
        .login-section {
          background-color: #fff;
          display: flex;
          justify-content: center;
          padding: 191px 80px;
        }
        .login-form {
          background-color: #fff;
          width: 622px;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          padding: 47px 64px;
          border: 1px solid rgba(0, 0, 0, 0.5);
        }
        .form-title {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.36px;
          margin-bottom: 43px;
        }
        .form-group {
          margin-bottom: 24px;
        }
        .form-input {
          width: 100%;
          padding: 8px 14px;
          border: 1px solid rgba(0, 0, 0, 0.5);
          font: 400 15px Montserrat, sans-serif;
        }
        .submit-btn {
          align-self: center;
          width: 130px;
          padding: 11px 0;
          border: none;
          border-radius: 6px;
          background-color: #00d084;
          color: #fff;
          font: 500 15px Montserrat, sans-serif;
          cursor: pointer;
        }
        .recover-link {
          text-align: center;
          margin: 24px 0;
          text-decoration: none;
        }
        .signup-prompt {
          display: flex;
          gap: 7px;
          justify-content: center;
          font: 400 15px Montserrat, sans-serif;
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
          .login-section {
            padding: 100px 20px;
          }
          .login-form {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}