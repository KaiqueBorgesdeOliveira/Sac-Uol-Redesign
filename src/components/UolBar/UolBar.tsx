import React from 'react';
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
  return (
    <div className="custom-uol-bar">
      <a href="https://www.uol.com.br/" target="_blank" rel="noopener" className="uol-logo-link">
        <img src="/assets/images/io-logouol.svg" alt="UOL" className="uol-logo-svg" />
      </a>
      <nav className="custom-uol-nav">
        {menuItems.map((label) => (
          <a href="#" className="nav-link" key={label}>{label}</a>
        ))}
      </nav>
      <div className="uol-bar-actions">
        <a href="#" className="bar-action">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7" stroke="#fff" strokeWidth="2"/>
            <line x1="16" y1="16" x2="20" y2="20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>BUSCA</span>
        </a>
        <a href="#" className="bar-action">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="16" height="12" rx="4" stroke="#fff" strokeWidth="2"/>
            <path d="M7 16L7.5 18C7.7 18.8 8.3 19 9 19H13C13.7 19 14.3 18.8 14.5 18L15 16" stroke="#fff" strokeWidth="2"/>
            <circle cx="8" cy="10" r="1" fill="#fff"/>
            <circle cx="11" cy="10" r="1" fill="#fff"/>
            <circle cx="14" cy="10" r="1" fill="#fff"/>
          </svg>
          <span>BATE-PAPO</span>
        </a>
        <a href="#" className="bar-action">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="16" height="10" rx="2" stroke="#fff" strokeWidth="2"/>
            <path d="M5 8L11 13L17 8" stroke="#fff" strokeWidth="2"/>
          </svg>
          <span>EMAIL</span>
        </a>
      </div>
    </div>
  );
};

export default UolBar; 