import React from 'react';
import './AppDownload.css';

const AppDownload: React.FC = () => {
  return (
    <div className="app-download sessao-centralizada">
      <div className="app-download-banner novo-layout">
        <img src="/assets/images/codigo-barras.png" alt="QR Code para download" className="qr-code" />
        <div className="app-download-center">
          <img src="/assets/images/icone-phone-cel.svg" alt="Celular" className="icon-phone" />
          <div className="app-download-text">
            Baixe agora o <strong>App <span>Meu UOL</span></strong><br />
            <span className="subtitle">e facilite seu dia a dia!</span>
          </div>
        </div>
        <div className="app-download-buttons">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/google-play.png" alt="Disponível no Google Play" />
          </a>
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/app-store.png" alt="Baixar na App Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownload; 