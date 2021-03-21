import React, { useState } from 'react';
import Link from 'next/link';
import { usePWAInstall } from 'react-use-pwa-install';

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen(false);
  const install = usePWAInstall();

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
          <Link href="/">
            <a id="home-btn" className="nav-polozky" onClick={handleClick}>
              Úvodní stránka
            </a>
          </Link>
          <Link href="/my-lists">
            <a id="seznamy-btn" className="nav-polozky" onClick={handleClick}>
              Všechny seznamy
            </a>
          </Link>
          <Link href="/about">
            <a id="app-btn" className="nav-polozky" onClick={handleClick}>
              O aplikaci
            </a>
          </Link>
          {install && (
            <button type="button" className="install-btn" onClick={install}>
              {' '}
              <img
                src="/assets/download.svg"
                alt="nainstalovat"
                title="nainstalovat"
                className="install-icon"
              />
              Nainstalovat
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
