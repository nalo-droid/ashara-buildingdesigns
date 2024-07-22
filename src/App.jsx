import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <LanguageSwitcher />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
