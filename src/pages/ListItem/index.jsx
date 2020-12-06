import React from 'react';
import { db } from '../../db';

export const ListItem = (props) => {
  const handleChange = (event) => {
    db.collection('seznamy')
      .doc(props.listId)
      .collection('kategorie')
      .doc(props.catId)
      .collection('polozky')
      .doc(props.id)
      .update({
        koupeno: event.target.checked,
      });
  };

  return (
    <div className="item-line">
      <li className={props.koupeno ? 'list-item item-checked' : 'list-item'}>
        <input
          className="input-checkbox-item"
          type="checkbox"
          onChange={handleChange}
          checked={props.koupeno}
        />
        {props.nazev.length + props.mnozstvi.length < 45 ? (
          <div className="itemSpanAmount">
            <div>{props.nazev}</div>
            <span className="vypln" />
            <div> {props.mnozstvi}</div>
          </div>
        ) : (
          <div className="itemAmount">
            <div className="LongItemAmount">{props.nazev}</div>
            <div className="LongItemAmount"> {props.mnozstvi}</div>
          </div>
        )}

        <button
          id="ikn-dlt"
          className="ikonka-delete"
          onClick={() =>
            db
              .collection('seznamy')
              .doc(props.listId)
              .collection('kategorie')
              .doc(props.catId)
              .collection('polozky')
              .doc(props.id)
              .delete()
          }
        ></button>
      </li>
    </div>
  );
};
