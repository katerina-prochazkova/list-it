import React, { useEffect, useState } from 'react';
import { db } from '../../db';

export const ListItem = (props) => {
  const handleChange = (event) => {
    console.log(props.listId, props.catId, props.id);
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
        />{' '}
        <div>{props.nazev}</div>
        <span class="vypln" />
        <div> {props.mnozstvi}</div>
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

// položka bude props - input.value
//ikonka bude props
