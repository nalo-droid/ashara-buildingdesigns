import React, { createContext, useState, useEffect } from 'react';
import en from '../public/i18n/en.json';
import om from '../public/i18n/om.json';

const LanguageContext = createContext();

const translations = { en, om };

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('om');
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'om';
    setLanguage(savedLanguage);
    setTexts(translations[savedLanguage]);
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    setTexts(translations[lang]);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, texts, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
