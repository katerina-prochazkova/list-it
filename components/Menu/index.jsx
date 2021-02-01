import React, { useState } from 'react';
import Link from 'next/link'

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
        <Link href="/">
          <a id="logo-btn" className="h3-logo">
            List it!
          </a>
        </Link>
        <nav
          className={menuOpen ? 'nav-large nav-open' : 'nav-closed nav-large'}
        >
          <Link
            href="/"
          >
            <a id="home-btn"
            className="nav-polozky"
            onClick={handleClick}>
              Úvodní stránka
            </a>
          </Link>
          <Link
            href="/my-lists"
          >
            <a id="seznamy-btn"
            className="nav-polozky"
            onClick={handleClick}>
              Všechny seznamy
            </a>
          </Link>
          <Link
            href="/about"
          >
            <a id="app-btn"
            className="nav-polozky"
            onClick={handleClick}>
              O aplikaci
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};
