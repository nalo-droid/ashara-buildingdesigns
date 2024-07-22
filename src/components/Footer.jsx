import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { MdPriceCheck } from 'react-icons/md';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <NavLink exact to="/" activeClassName="active" className="footer-link">
        <IoHome size={24} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/pricing" activeClassName="active" className="footer-link">
        <MdPriceCheck size={24} />
        <span>Pricing</span>
      </NavLink>
    </div>
  );
}

export default Footer;
