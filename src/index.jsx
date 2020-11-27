import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import './db.js';

render(
  <>
    <header>
      <h2 class="nazev-seznamu">Sdílený seznam</h2>
    </header>
    <main>
      <p>tady bude sdílený seznam Tinky a Kačky</p>
    </main>
    <footer>by KP+KP</footer>
  </>,
  document.querySelector('#app'),
);
