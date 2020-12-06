import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen(false);

  return (
    <header>
      <div className="navigation-container">
        <button
          id="nav-btn"
          className={menuOpen ? 'nav-btn nav-btn-open' : 'nav-btn'}
          onClick={() => setMenuOpen(!menuOpen)}
        ></button>
        <Link to="/" id="logo-btn" className="h3-logo">
          List it!
        </Link>
        <nav
          className={menuOpen ? 'nav-large nav-open' : 'nav-closed nav-large'}
        >
          <Link
            to="/"
            id="home-btn"
            className="nav-polozky"
            onClick={handleClick}
          >
            Úvodní stránka
          </Link>
          <Link
            to="/MyLists"
            id="seznamy-btn"
            className="nav-polozky"
            onClick={handleClick}
          >
            Všechny seznamy
          </Link>
          <Link
            to="/about"
            id="app-btn"
            className="nav-polozky"
            onClick={handleClick}
          >
            O aplikaci
          </Link>
        </nav>
      </div>
    </header>
  );
};
