import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="navigation-container">
        <button
          id="nav-btn"
          className="nav-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        ></button>
        <Link to="/" id="logo-btn" className="h3-logo">
          List it!
        </Link>
        <nav
          className={menuOpen ? 'nav-large nav-open' : 'nav-closed nav-large'}
        >
          <Link to="/" id="home-btn" className="nav-polozky">
            Úvodní stránka
          </Link>
          <Link to="/list/66" id="seznamy-btn" className="nav-polozky">
            Moje seznamy
          </Link>
          <Link to="/about" id="app-btn" className="nav-polozky">
            O aplikaci
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
