import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="nao-encontrou sessao-centralizada">
      <h3>
        <span className="faq-title-bar"></span>
        Não encontrou o que precisava?
      </h3>
      <div className="nao-encontrou-botoes">
        <a href="#" className="nao-encontrou-btn">
          <img src="/assets/images/Icone-whatsapp-28x28px.svg" alt="WhatsApp" className="nao-encontrou-icone" />
          Fale pelo WhatsApp com o nosso suporte técnico.
        </a>
        <a href="#" className="nao-encontrou-btn">
          <img src="/assets/images/Icone-atendimento-28x28px.svg" alt="Atendimento Online" className="nao-encontrou-icone" />
          Fale com o UOLY, nosso chat online.
        </a>
      </div>
    </section>
  );
};

export default Contact; 