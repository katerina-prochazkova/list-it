import React, { useState } from 'react';
import { render } from 'react-dom';
import { ListCategory } from '../ListCategory/index.jsx';

export const List = (props) => {
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setItemName('');
    setItemAmount('');
  };

  return (
    <body>
      <header>
        <div className="navigation-container">
          <button id="nav-btn" className="nav-btn"></button>
          <h3>List it!</h3>
          <nav className="nav-closed">
            <a id=" domu-btn" className="nav-polozky" href="index.html">
              Úvodní stránka
            </a>
            <a id="seznamy-btn" className="nav-polozky" href="">
              Moje seznamy
            </a>
            <a id="app-btn" className="nav-polozky" href="about.html">
              O aplikaci
            </a>
          </nav>
        </div>
      </header>
      <main className="list-main">
        <div className="seznam-container">
          <h2>Název seznamu</h2>
          {/* název seznamu bude props input value z homepage */}
          <form className="form-list" onSubmit={handleSubmit}>
            <div className="new-input">
              <input
                className="input"
                type="text"
                placeholder="  Nová položka"
                value={itemName}
                onChange={(event) => setItemName(event.target.value)}
              />
              <br />
              <input
                className="input"
                type="text"
                placeholder="  Množství (volitelné)"
                value={itemAmount}
                onChange={(event) => setItemAmount(event.target.value)}
              />
              <br />
            </div>
            <div className="kategorie-ikonky">
              kategorie ikonky
              <img className="ikonky-volba" src="ikonka" />
              <img className="ikonky-volba" src="ikonka" />
              <img className="ikonky-volba" src="ikonka" />
              <img className="ikonky-volba" src="ikonka" />
              {/* tady by mohly být ikonky pro kategorie (nebo dropdown select) */}
            </div>
            <button className="btn-add-item" type="submit">
              přidat
            </button>
            {/* <!-- tady bude ikonka zelené kolečko s pluskem--> */}
          </form>
          <ListCategory />
        </div>
      </main>
      <footer>KPKP 2020</footer>
    </body>
  );
};
