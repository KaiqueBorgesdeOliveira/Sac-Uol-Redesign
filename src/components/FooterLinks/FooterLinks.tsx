import React from 'react';
import './FooterLinks.css';

const FooterLinks: React.FC = () => {
  return (
    <div className="footer-links sessao-centralizada">
      <div className="footer-column">
        <h3>Atendimento</h3>
        <ul>
          <li><a href="#">Fale conosco</a></li>
          <li><a href="#">Ouvidoria Produtos Digitais</a></li>
          <li><a href="#">Ouvidoria UOL Host</a></li>
          <li><a href="#">Perguntas frequentes</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Financeiro</h3>
        <ul>
          <li><a href="#">Meus débitos</a></li>
          <li><a href="#">Meu extrato</a></li>
          <li><a href="#">2ª Via de boleto a vencer</a></li>
          <li><a href="#">Meios de pagamento</a></li>
          <li><a href="#">Comprovante de quitação</a></li>
          <li><a href="#">Dados de recebimento</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Minha conta</h3>
        <ul>
          <li><a href="#">Alterar senha</a></li>
          <li><a href="#">Meus dados</a></li>
          <li><a href="#">Meus produtos</a></li>
          <li><a href="#">Cartilha de segurança</a></li>
          <li><a href="#">Central de segurança</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks; 