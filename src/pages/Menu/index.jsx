import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../about/about.jsx';
import { List } from '../list/index.jsx';
import { Home } from '../home/home.jsx';

const Menu = () => {
  return (
    <header>
      <div className="navigation-container">
        <button id="nav-btn" className="nav-btn"></button>
        <h3>List it!</h3>
        <nav className="nav-closed">
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
