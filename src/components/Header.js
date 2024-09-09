// src/components/Header.js
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Lexicon Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#">Utbildningar</a></li>
          <li><a href="#">Tjänster</a></li>
          <li><a href="#">Affärsområden</a></li>
          <li><a href="#">Om Lexicon</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </nav>
      <div className="header-icons">
        <a href="#" className="icon-link">
          <FontAwesomeIcon icon={faSearch} /> Sök
        </a>
        <a href="#" className="icon-link">
          <FontAwesomeIcon icon={faShoppingCart} /> Varukorg
        </a>
        <a href="#" className="icon-link">
          <FontAwesomeIcon icon={faUser} /> Ditt konto
        </a>
      </div>
    </header>
  );
};

export default Header;
