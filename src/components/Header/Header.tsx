import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [userName] = useState('Usuário');

  return (
    <header className="menu-header">
      <div className="menu-header-content">
        <div className="logo">
          <a href="/"><img src="/assets/images/Logo SAC.svg" alt="SAC UOL" /></a>
        </div>
        <nav>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li>
              <a href="#">Atendimento</a>
              <div className="dropdown-menu">
                <a href="#">Ajuda</a>
                <a href="#">Fale conosco</a>
              </div>
            </li>
            <li>
              <a href="#">Financeiro</a>
              <div className="dropdown-menu">
                <a href="#">Meus débitos</a>
                <a href="#">Meu extrato</a>
                <a href="#">2ª via de boleto a vencer</a>
                <a href="#">Meios de pagamento</a>
                <a href="#">Comprovante de quitação</a>
                <a href="#">Dados de recebimento</a>
              </div>
            </li>
            <li>
              <a href="#">Minha conta</a>
              <div className="dropdown-menu">
                <a href="#">Alterar senha</a>
                <a href="#">Meus dados</a>
                <a href="#">Meus benefícios</a>
                <a href="#">Meus produtos</a>
                <a href="#">Cartilha de segurança</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="right-menu">
          <a href="#" className="help-link">
            <img src="/assets/images/Icone-ajuda-28x28px.svg" alt="Ajuda" />
            Ajuda
          </a>
          <a href="#" className="login-link">
            <img src="/assets/images/Icone perfil.svg" alt="Perfil" />
            {userName}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 