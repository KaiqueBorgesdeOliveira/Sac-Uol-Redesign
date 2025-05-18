import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
    isLoading: boolean;
    userName: string;
    produtos: Array<{
        nome: string;
        icone: string;
    }>;
    currentSlide: number;
    itemsPerPage: number;
    toggleLoader: (show: boolean) => void;
    nextSlide: () => void;
    prevSlide: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [userName] = useState('Kaique');
    const [itemsPerPage] = useState(4);

    const produtos = [
        { nome: 'UOL Mail', icone: 'assets/images/uol-mail.svg' },
        { nome: 'UOL Play', icone: 'assets/images/uol-play-teste.svg' },
        { nome: 'UOL Assine', icone: 'assets/images/assine-uol.svg' },
        { nome: 'UOL Assistência Técnica', icone: 'assets/images/assistencia-tecnica.svg' },
        { nome: 'Clube UOL', icone: 'assets/images/clube-uol.svg' }
    ];

    const toggleLoader = (show: boolean) => {
        const loader = document.getElementById('loaderCurtain');
        if (loader) {
            loader.style.display = show ? 'block' : 'none';
        }
        setIsLoading(show);
    };

    const nextSlide = () => {
        if (currentSlide < produtos.length - itemsPerPage) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        console.log('Aplicativo SAC UOL iniciado');
    }, []);

    return (
        <AppContext.Provider value={{
            isLoading,
            userName,
            produtos,
            currentSlide,
            itemsPerPage,
            toggleLoader,
            nextSlide,
            prevSlide
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp deve ser usado dentro de um AppProvider');
    }
    return context;
}; 