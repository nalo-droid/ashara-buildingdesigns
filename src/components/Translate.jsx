import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '../LanguageContext';

const Translate = ({ text }) => {
  const { language } = useContext(LanguageContext);
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    const translateText = async () => {
      try {
        const response = await axios.post(
          `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`,
          {
            q: text,
            target: language
          }
        );
        setTranslatedText(response.data.data.translations[0].translatedText);
      } catch (error) {
        console.error('Translation error', error);
      }
    };

    if (language !== 'en') {
      translateText();
    } else {
      setTranslatedText(text);
    }
  }, [language, text]);

  return <span>{translatedText}</span>;
};

export default Translate;
