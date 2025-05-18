import React from 'react';
import { useApp } from '../../context/AppContext';
import './Products.css';

const Products: React.FC = () => {
    const { produtos, currentSlide, itemsPerPage, nextSlide, prevSlide } = useApp();

    const visibleProducts = produtos.slice(currentSlide, currentSlide + itemsPerPage);

    return (
        <section className="banner-propagandas">
            <div className="produtos-title">
                <span className="faq-title-bar"></span>
                <span>Produtos UOL</span>
            </div>
            <div className="produtos-nav">
                <div className="produtos-carousel">
                    <div className="produtos-items" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
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
                            disabled={currentSlide === 0}
                        >
                            <span className="material-icons">chevron_left</span>
                        </button>
                        <button
                            className="nav-button"
                            onClick={nextSlide}
                            disabled={currentSlide >= produtos.length - itemsPerPage}
                        >
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products; 