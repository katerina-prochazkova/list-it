import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './db.js';
// import About from './pages/about/about.jsx';
// import List from './pages/list/list.jsx';
import Home from './pages/home/home.jsx';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

const routes = [
  { component: Home, path: '/', exact: true },
  // { component: About, path: '/about' },
  // { component: List, path: '/list/:id?' },
];

render(
  <>
    <Router>
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
      <main>
        <p>Zkušební napojení seznamu</p>
      </main>
      <footer>KPKP 2020</footer>
    </Router>
  </>,
  document.querySelector('#app'),
);
