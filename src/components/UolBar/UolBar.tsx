import React, { useState } from 'react';
import './UolBar.css';

const menuItems = [
  'INGRESSO.COM',
  'UOL HOST',
  'PAGBANK',
  'CURSOS',
  'UOL PLAY',
  'UOL ADS',
];

const UolBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="custom-uol-bar">
      <a href="https://www.uol.com.br/" target="_blank" rel="noopener" className="uol-logo-link">
        <img src="/assets/images/io-logouol.svg" alt="UOL" className="uol-logo-svg" />
      </a>
      <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
        <span className="material-icons">menu</span>
      </button>
      <nav className={`custom-uol-nav${menuOpen ? ' open' : ''}`}>
        {menuItems.map((label) => (
          <a href="#" className="nav-link" key={label}>{label}</a>
        ))}
      </nav>
      <div className="uol-bar-actions">
        <a href="#" className="bar-action" title="Busca">
          <span className="material-icons">search</span>
        </a>
        <a href="#" className="bar-action" title="Bate-papo">
          <span className="material-icons">chat</span>
        </a>
        <a href="#" className="bar-action" title="Email">
          <span className="material-icons">mail</span>
        </a>
      </div>
    </div>
  );
};

export default UolBar; 