import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import './db.js';
import './pages/list/index.html';

render(
  <>
    <header>
      <h1>Sdílený seznam</h1>
    </header>
    <main>
      <p>tady bude sdílený seznam Tinky a Kačky</p>
    </main>
    <footer>by KP+KP</footer>
  </>,
  document.querySelector('#app'),
);
