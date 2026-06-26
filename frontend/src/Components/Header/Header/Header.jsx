/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import mobStyles from './Headermobile.module.css';
import NavLink from '../NavLink/NavLink';
import Button from '../Button/Button';
import { useTheme } from '../../Acessibility/AltoContraste/ThemeContext';

const navItems = [
  { text: 'PAGINA INICIAL', href: '/' },
  { text: 'SERVIÇOS PRESTADOS', href: '/servicos' },
  { text: 'PESQUISA DE SERVIÇOS', href: '/pesquisa' },
  { text: 'PERGUNTAS FREQUENTES', href: '/faq' },
  { text: 'SOBRE NÓS', href: '/sobre' },
];

function Header() {
  const { highContrast } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referência ao menu para verificar cliques fora

  const closeMenu = () => setMenuOpen(false);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const sectionStyle = {
    backgroundColor: highContrast ? '#888888' : 'white',
    color: highContrast ? 'white' : 'black',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  };


  return (
    <header style={sectionStyle} className={styles.header}>
      <div className={styles.headerDesktop}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eecfa1c5dc045aadbcef86e204348aed40a807884549cf8a6dc37da3eabd559?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d" className={styles.logo} alt="Company logo" />
        <nav className={styles.navLinks}>
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
        <div className={styles.buttonGroup}>
          <a href="/login">
            <Button variant="outlined" text="Área do Cliente" />
          </a>
          <Button variant="filled" text="Entrar em Contato" />
        </div>
      </div>

      <div className={mobStyles.headerMobile}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eecfa1c5dc045aadbcef86e204348aed40a807884549cf8a6dc37da3eabd559?placeholderIfAbsent=true&apiKey=d7514896dbad40828bdeb0585d8c7a9d"
          className={mobStyles.logo}
          alt="Company logo"
        />
        <button
          className={mobStyles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        {menuOpen && <div className={mobStyles.overlay} onClick={closeMenu} />}
        <nav
          ref={menuRef}
          className={`${mobStyles.navLinks} ${menuOpen ? mobStyles.navOpen : ''}`}
          onClick={(e) => {
            if (e.target.tagName === 'A') closeMenu(); // Fecha ao clicar em um link
          }}
        >
          <button className={mobStyles.closeButton} onClick={closeMenu} aria-label="Close menu">
            ✖
          </button>
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
          <a href="/login">
            <Button variant="outlined" text="Área do Cliente" />
          </a>
          <Button variant="filled" text="Entrar em Contato" />
        </nav>
      </div>
    </header>
  );
}

export default Header;