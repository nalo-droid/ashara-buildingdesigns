import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <button onClick={() => switchLanguage('om')} disabled={language === 'om'}>Oromo</button>
      <button onClick={() => switchLanguage('en')} disabled={language === 'en'}>English</button>
    </div>
  );
};

export default LanguageSwitcher;
