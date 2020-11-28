import React, { useState } from 'react';
import { render } from 'react-dom';
import { ListCategory } from '../ListCategory/index.jsx';
import { NewItemForm } from '../NewItemForm/index.jsx';

export const List = (props) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setItemName('');
  //   setItemAmount('');
  // };

  return (
    <>
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

          <NewItemForm />
          <ListCategory />
        </div>
      </main>
    </>
  );
};
