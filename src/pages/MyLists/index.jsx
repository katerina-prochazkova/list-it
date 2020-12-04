import React, { useEffect, useState } from 'react';
import { db } from '../../db.js';
import { Link } from 'react-router-dom';

export const MyLists = (props) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    return db.collection('seznamy').onSnapshot((querySnapshot) => {
      setLists(
        querySnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
  }, [props.lists]);

  return (
    <main>
      <h1>Všechny seznamy</h1>
      <div className="seznam-container">
        {lists.map((list) => {
          return (
            <div className="list-line">
              <div className="my-list--icon">
                <img
                  className="my-list--icon_type"
                  src={`/assets/${list.typ}.svg`}
                />
              </div>
              <Link to={`/list/${list.id}`} className="my-list--title">
                {list.nazev}
              </Link>
              <button
                id="ikn-dlt"
                className="my-list--icon_delete"
                onClick={() => {
                  window.confirm(
                    'Chcete tento seznam skutečně trvale smazat? Nepůjde obnovit!',
                  )
                    ? db.collection('seznamy').doc(list.id).delete()
                    : null;
                }}
              ></button>
            </div>
          );
        })}
      </div>
    </main>
  );
};
