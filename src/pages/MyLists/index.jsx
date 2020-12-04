import React, { useEffect, useState } from 'react';
import { db } from '../../db.js';
import { Link } from 'react-router-dom';

export const MyLists = (props) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    return db.collection('seznamy').onSnapshot((querySnapshot) => {
      setLists(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, [props.lists]);

  return (
    <main>
      <h1>Moje seznamy</h1>
      <div className="seznam-container">
        {lists.map((list) => {
          return (
            <div className="list-line">
              <img
                className="my-list--icon_type"
                src={`/assets/${list.typ}.svg`}
              />
              {/* <h2 className="">{list.nazev}</h2> */}
              <Link to={`/list/${list.id}`} className="my-list--title">
                {list.nazev}
              </Link>

              <button id="ikn-dlt" className="my-list--icon_delete"></button>
            </div>
          );
        })}
      </div>
    </main>
  );
};
