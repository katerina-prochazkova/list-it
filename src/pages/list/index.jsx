import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom';
import { db } from '../../db.js';
import { ListCategory } from '../ListCategory/index.jsx';
import { NewItemForm } from '../NewItemForm/index.jsx';

export const List = (props) => {
  const { id } = useParams();
  const [seznam, setSeznam] = useState(null);
  const [urlCopied, setUrlCopied] = useState(false);

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

      {seznam === null ? null : (
        <main className="list-main">
          <div className="seznam-container">
            <div className="container-icons--action">
              <button
                className="btn-icon-action"
                onClick={() => window.print()}
              >
                <img
                  className="ikonky-action"
                  src="/assets/printgreen.svg"
                  alt="tisk"
                  title="tisk"
                />
              </button>
              <button
                className="btn-icon-action"
                onClick={() => {
                  navigator.clipboard.writeText(location.href);
                  setUrlCopied(true);
                  setTimeout(() => setUrlCopied(false), 4000);
                }}
              >
                <img
                  className="ikonky-action"
                  src="/assets/sharegreen.svg"
                  alt="sdílení"
                  title="zkopírovat URL adresu"
                />
              </button>
              {urlCopied ? (
                <div className="message-copied">URL adresa zkopírována</div>
              ) : null}
            </div>
            <h2 className="seznam-title">{seznam.nazev}</h2>
            <p className="instruction">
              Přidejte položku, množství a označte její kategorii
            </p>

            <ListCategory id={id} type={seznam.typ} />
          </div>
        </main>
      )}
    </>
  );
};
