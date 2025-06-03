import React, { useState } from 'react';
import './ChatBotPopup.css';

const ChatBotPopup: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="chatbot-popup">
      <button className="chatbot-close" onClick={() => setVisible(false)}>
        ×
      </button>
      <div className="chatbot-message">
        Olá, sou o Uoly.<br />Precisa de ajuda?
      </div>
      <img
        src="/assets/images/avatar_UOL_final_amarela_logo_horizontal.png"
        alt="Avatar Uoly"
        className="chatbot-avatar"
      />
    </div>
  );
};

export default ChatBotPopup; 