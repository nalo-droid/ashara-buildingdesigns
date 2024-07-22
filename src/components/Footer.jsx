import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { MdPriceCheck } from 'react-icons/md';
import { LanguageContext } from '../LanguageContext';
import './Footer.css';

function Footer() {
  const { texts } = useContext(LanguageContext);

  return (
    <div className="footer">
      <NavLink exact to="/" activeClassName="active" className="footer-link">
        <IoHome size={24} />
        <span>{texts.home}</span>
      </NavLink>
      <NavLink to="/pricing" activeClassName="active" className="footer-link">
        <MdPriceCheck size={24} />
        <span>{texts.pricing}</span>
      </NavLink>
    </div>
  );
}

export default Footer;
