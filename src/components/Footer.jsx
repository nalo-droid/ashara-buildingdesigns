import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/pricing" activeClassName="active">
        Pricing
      </NavLink>
    </div>
  );
}

export default Footer;
