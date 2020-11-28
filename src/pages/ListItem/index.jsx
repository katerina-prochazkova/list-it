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
    <li className="list-item">
      <div>
        <input
          className="input-checkbox"
          type="checkbox"
          onChange={handleChange}
          checked={props.koupeno}
        />{' '}
        <img src="ikonka" />
        {props.nazev} {props.mnozstvi}
      </div>
      <img className="ikonka-delete" src="ikonka-delete" />
    </li>
  );
};

// položka bude props - input.value
//ikonka bude props
