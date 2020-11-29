import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../db.js';
import { ListCategory } from '../ListCategory/index.jsx';
import { NewItemForm } from '../NewItemForm/index.jsx';

export const List = (props) => {
  const { id } = useParams();
  const [seznam, setSeznam] = useState(null);
  console.log(seznam);

  useEffect(() => {
    return db
      .collection('seznamy')
      .doc(id)
      .onSnapshot(function (doc) {
        setSeznam(doc.data());
      });
  }, [id]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (seznam !== null) {
      body.classList.add(`type-${seznam.typ}`);
      return () => {
        body.classList.remove(`type-${seznam.typ}`);
      };
    }
  }, [seznam]);

  return (
    <>
      {/* <p>Id: {id}</p> */}
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
      {seznam === null ? null : (
        <main className="list-main">
          <div className="seznam-container">
            <h2>{seznam.nazev}</h2>

            <ListCategory id={id} />
          </div>
        </main>
      )}
    </>
  );
};
