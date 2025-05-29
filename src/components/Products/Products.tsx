import React, { useRef, useState } from 'react';
import { useApp } from '../../context/AppContext';
import './Products.css';

const Products: React.FC = () => {
    const { produtos, currentSlide, itemsPerPage, nextSlide, prevSlide } = useApp();

    // Ajuste para garantir que o último card possa ser exibido
    const maxSlide = Math.max(produtos.length - itemsPerPage, 0);
    const slide = Math.min(currentSlide, maxSlide);
    // Novo cálculo: porcentagem baseada na quantidade de itens visíveis
    const percent = 100 / itemsPerPage;
    const translateX = slide * percent;

    // --- Swipe handlers ---
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const [isSwiping, setIsSwiping] = useState(false);

    const isMobile = () => window.innerWidth <= 992;

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!isMobile()) return;
        touchStartX.current = e.touches?.[0]?.clientX ?? null;
        setIsSwiping(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isMobile()) return;
        touchEndX.current = e.touches?.[0]?.clientX ?? null;
        // Previne o scroll horizontal da página
        if (Math.abs((touchStartX.current ?? 0) - (touchEndX.current ?? 0)) > 10) {
            e.preventDefault();
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!isMobile()) return;
        if (!isSwiping || touchStartX.current === null || touchEndX.current === null) {
            setIsSwiping(false);
            return;
        }
        const distance = touchStartX.current - touchEndX.current;
        if (distance > 50) {
            nextSlide(); // Swipe para a esquerda
        } else if (distance < -50) {
            prevSlide(); // Swipe para a direita
        }
        setIsSwiping(false);
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section className="banner-propagandas">
            <div className="sessao-centralizada">
                <div className="produtos-title">
                    <span className="faq-title-bar"></span>
                    <span>Navegue pelos produtos</span>
                </div>
                <div className="produtos-nav">
                    <div className="produtos-carousel">
                        <div
                            className="produtos-items"
                            style={{ transform: `translateX(-${translateX}%)` }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
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