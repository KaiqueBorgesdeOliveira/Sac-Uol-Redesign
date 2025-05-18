import React, { useRef, useEffect } from 'react';
import { useSearchSuggestions } from '../../hooks/useSearchSuggestions';
import './HelpSearch.css';

const HelpSearch: React.FC = () => {
    const { suggestions, isVisible, handleSearch, hideSuggestions } = useSearchSuggestions();
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                hideSuggestions();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [hideSuggestions]);

    return (
        <section className="help-search">
            <h2>Como podemos ajudar?</h2>
            <div className="search-box" ref={searchRef}>
                <input
                    type="text"
                    placeholder="Digite sua dúvida..."
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <button type="button">
                    <span className="material-icons">search</span>
                </button>
                {isVisible && (
                    <div className="search-suggestions">
                        {suggestions.map((suggestion, index) => (
                            <div key={index} className="suggestion-item">
                                <span className="material-icons">search</span>
                                <span>{suggestion}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="faq-box">
                <h3 className="faq-title">
                    <span className="faq-title-bar"></span>
                    Perguntas frequentes
                </h3>
                <ul className="faq-list">
                    <li className="faq-item">
                        Como recuperar minha senha?
                        <span className="material-icons">chevron_right</span>
                    </li>
                    <li className="faq-item">
                        Como alterar meu plano?
                        <span className="material-icons">chevron_right</span>
                    </li>
                    <li className="faq-item">
                        Como cancelar minha assinatura?
                        <span className="material-icons">chevron_right</span>
                    </li>
                    <li className="faq-item">
                        Como atualizar meus dados?
                        <span className="material-icons">chevron_right</span>
                    </li>
                    <li className="faq-item">
                        Como solicitar segunda via de boleto?
                        <span className="material-icons">chevron_right</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HelpSearch; 