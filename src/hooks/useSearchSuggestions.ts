import { useState, useCallback } from 'react';

const sugestoes = [
    'Como recuperar minha senha?',
    'Como alterar meu plano?',
    'Como cancelar minha assinatura?',
    'Como atualizar meus dados?',
    'Como solicitar segunda via de boleto?'
];

export const useSearchSuggestions = () => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    const handleSearch = useCallback((query: string) => {
        if (!query) {
            setSuggestions([]);
            setIsVisible(false);
            return;
        }

        const matches = sugestoes.filter(s => 
            s.toLowerCase().includes(query.toLowerCase())
        );
        
        setSuggestions(matches);
        setIsVisible(matches.length > 0);
    }, []);

    const hideSuggestions = useCallback(() => {
        setIsVisible(false);
    }, []);

    return {
        suggestions,
        isVisible,
        handleSearch,
        hideSuggestions
    };
}; 