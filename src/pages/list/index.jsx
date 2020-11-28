import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom';
import { db } from '../../db.js';
import { ListCategory } from '../ListCategory/index.jsx';
import { NewItemForm } from '../NewItemForm/index.jsx';

export const List = (props) => {
  const { id } = useParams();
  const [seznam, setSeznam] = useState(null);

  useEffect(() => {
    return db
      .collection('seznamy')
      .doc(id)
      .onSnapshot(function (doc) {
        setSeznam(doc.data());
      });
  }, [id]);

  return (
    <>
      <p>Id: {id}</p>
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
      {seznam === null ? null : (
        <main className="list-main">
          <div className="seznam-container">
            <h2>{seznam.nazev}</h2>

            <NewItemForm />
            <ListCategory id={id} />
          </div>
        </main>
      )}
    </>
  );
};
