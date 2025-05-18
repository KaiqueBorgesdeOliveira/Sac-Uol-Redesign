import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-info">
      <p>Sua senha é secreta. Nenhum funcionário a serviço do UOL está autorizado a solicitá-la.</p>
      <div className="links">
        <a href="#">Regras de uso</a>
        <a href="#">Política antispam</a>
        <a href="#">Crimes virtuais: denuncie</a>
        <a href="#">Normas de Segurança e privacidade</a>
      </div>
      <p className="company-info">© 1996 - 2025 - UOL - O melhor conteúdo. Todos os direitos reservados.</p>
      <p className="company-info">UNIVERSO ONLINE S/A - CNPJ/MF 01.109.184/0001-95 - Av. Brigadeiro Faria Lima, 1.384, São Paulo/SP - CEP 01452-002 - uol.com.br/sac</p>
    </footer>
  );
};

export default Footer; 