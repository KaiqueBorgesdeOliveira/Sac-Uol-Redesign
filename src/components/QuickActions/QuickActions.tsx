import React from 'react';
import './QuickActions.css';

const QuickActions: React.FC = () => {
  return (
    <section className="quick-actions">
      <div className="action-grid">
        <a href="#" className="action-item">
          <img src="/assets/images/Icone-meios-de-pagamento-60x60px.svg" alt="Ícone Meus Débitos" />
          <h3>Meus Débitos</h3>
        </a>
        <a href="#" className="action-item">
          <img src="/assets/images/Icone-meus-produtos-60x60px.svg" alt="Ícone Meus Produtos" />
          <h3>Meus Produtos</h3>
        </a>
        <a href="#" className="action-item">
          <img src="/assets/images/Icone-extrato-60x60px.svg" alt="Ícone Meu Extrato" />
          <h3>Meu Extrato</h3>
        </a>
        <a href="#" className="action-item">
          <img src="/assets/images/Boleto.svg" alt="Ícone 2ª via de boleto" />
          <h3>2ª via de boleto</h3>
        </a>
        <a href="#" className="action-item">
          <img src="/assets/images/Icone Alterar senha.svg" alt="Ícone Recuperar Senha" />
          <h3>Recuperar Senha</h3>
        </a>
      </div>
    </section>
  );
};

export default QuickActions; 