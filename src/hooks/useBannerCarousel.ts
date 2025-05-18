import { useState, useEffect, useCallback } from 'react';

const banners = [
    'assets/images/Banner.png',
    'assets/images/1500_LG.png',
    'assets/images/1500_dinner.png',
    'assets/images/1500_bangers.png'
];

export const useBannerCarousel = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const updateBanner = useCallback((newIndex: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentBanner(newIndex);
            setIsTransitioning(false);
        }, 500);
    }, []);

    const nextBanner = useCallback(() => {
        const newIndex = (currentBanner + 1) % banners.length;
        updateBanner(newIndex);
    }, [currentBanner, updateBanner]);

    const prevBanner = useCallback(() => {
        const newIndex = (currentBanner - 1 + banners.length) % banners.length;
        updateBanner(newIndex);
    }, [currentBanner, updateBanner]);

    useEffect(() => {
        const interval = setInterval(nextBanner, 5000);
        return () => clearInterval(interval);
    }, [nextBanner]);

    return {
        currentBanner,
        banners,
        isTransitioning,
        nextBanner,
        prevBanner
    };
}; 