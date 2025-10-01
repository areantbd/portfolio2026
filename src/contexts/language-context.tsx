"use client"
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import type { PortfolioData } from '@/lib/content';
import { portfolioData } from '@/lib/content';

export type Language = "en" | "es";

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    content: PortfolioData[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");

    const value = useMemo(() => {
        const content = portfolioData[language];
        return { language, setLanguage, content };
    }, [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
