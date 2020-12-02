import React, { useState, useEffect } from 'react';
import { db } from '../../db';
import { ListItem } from '../ListItem';

export const Category = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    return db
      .collection('seznamy')
      .doc(props.listId)
      .collection('kategorie')
      .doc(props.id)
      .collection('polozky')
      .onSnapshot((querySnapshot) => {
        setItems(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
  }, [props.id, props.listId]);

  if (items.length > 0) {
    return (
      <div className="kategorie-container">
        <div className="kategorie-list">
          <input
            className="input-checkbox-ktg"
            type="checkbox"
            checked={items.length > 0 && items.every((item) => item.koupeno)}
            onChange={(event) => {
              items.forEach((item) => {
                db.collection('seznamy')
                  .doc(props.listId)
                  .collection('kategorie')
                  .doc(props.id)
                  .collection('polozky')
                  .doc(item.id)
                  .update({
                    koupeno: event.target.checked,
                  });
              });
            }}
          />
          <button className="btn-kategorie" onClick={handleClick}>
            <img
              className="ikonka-kategorie"
              src={`/assets/${props.ikona}.svg`}
            />{' '}
            {props.nazev}
            <div className={active ? 'ikonka-sbal' : 'ikonka-rozbal'} />
          </button>
          <button
            id="ikn-dlt"
            className="ikonka-delete-ktg"
            onClick={() => {
              items.forEach((item) => {
                db.collection('seznamy')
                  .doc(props.listId)
                  .collection('kategorie')
                  .doc(props.id)
                  .collection('polozky')
                  .doc(item.id)
                  .delete();
              });
            }}
          ></button>
        </div>
        {active ? (
          <ul className="list">
            {items.map((item) => (
              <ListItem
                key={item.id}
                {...item}
                catId={props.id}
                listId={props.listId}
              />
            ))}
          </ul>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
};
