import React from 'react';
import { useBannerCarousel } from '../../hooks/useBannerCarousel';
import './HeroBanner.css';

const HeroBanner: React.FC = () => {
    const { currentBanner, banners, isTransitioning, nextBanner, prevBanner } = useBannerCarousel();

    return (
        <section className="hero-banner">
            <div className="banner-carousel">
                <img
                    src={banners[currentBanner]}
                    alt="Banner promocional"
                    style={{ opacity: isTransitioning ? 0 : 1 }}
                />
                <div className="banner-controls">
                    <button onClick={prevBanner} className="prev-banner">
                        <span className="material-icons">chevron_left</span>
                    </button>
                    <button onClick={nextBanner} className="next-banner">
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner; 