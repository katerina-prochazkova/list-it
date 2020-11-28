import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './pages/list/style.css';
import './db.js';
import About from './pages/about/about.jsx';
import { List } from './pages/list/index.jsx';
import { Home } from './pages/home/home.jsx';
import Menu from './pages/Menu/index.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const routes = [
  { component: Home, path: '/', exact: true },
  { component: About, path: '/about' },
  { component: List, path: '/list/:id?' },
];

const App = () => {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
          ;
        </Switch>
        <footer>KPKP 2020</footer>
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
