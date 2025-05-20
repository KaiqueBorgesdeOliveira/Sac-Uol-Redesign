import React from 'react';
import { useApp } from '../../context/AppContext';
import './Products.css';

const Products: React.FC = () => {
    const { produtos, currentSlide, itemsPerPage, nextSlide, prevSlide } = useApp();

    const maxSlide = produtos.length - itemsPerPage;
    const slide = Math.min(currentSlide, maxSlide > 0 ? maxSlide : 0);
    // Novo cálculo: porcentagem baseada na quantidade de itens visíveis
    const percent = 100 / itemsPerPage;
    const translateX = slide * percent;

    return (
        <section className="banner-propagandas">
            <div className="sessao-centralizada">
                <div className="produtos-title">
                    <span className="faq-title-bar"></span>
                    <span>Navegue pelos produtos</span>
                </div>
                <div className="produtos-nav">
                    <div className="produtos-carousel">
                        <div className="produtos-items" style={{ transform: `translateX(-${translateX}%)` }}>
                            {produtos.map((produto, index) => (
                                <div key={index} className="produtos-item">
                                    <div className="produto-card">
                                        <img src={produto.icone} alt={produto.nome} />
                                        <div className="produto-nome">{produto.nome}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="nav-buttons">
                            <button
                                className="nav-button"
                                onClick={prevSlide}
                                disabled={slide === 0}
                            >
                                <span className="material-icons">chevron_left</span>
                            </button>
                            <button
                                className="nav-button"
                                onClick={nextSlide}
                                disabled={slide >= maxSlide}
                            >
                                <span className="material-icons">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products; 