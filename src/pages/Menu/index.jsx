import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../about/about.jsx';
import { List } from '../list/index.jsx';
import { Home } from '../home/home.jsx';

const Menu = () => {
  const routes = [
    { component: Home, path: '/', exact: true },
    { component: About, path: '/about' },
    { component: List, path: '/list/66' },
  ];
  return (
    <header>
      <h1>Sdílený seznam</h1>
      <ul>
        <li>
          <Link to="/">Úvodní stránka</Link>
        </li>
        <li>
          <Link to="/about">O aplikaci</Link>
        </li>
        <li>
          <Link to="/list">Seznam</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
        ;
      </Switch>
    </header>
  );
};

export default Menu;
