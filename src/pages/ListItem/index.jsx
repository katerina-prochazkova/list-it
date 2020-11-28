import React, { useEffect, useState } from 'react';

export const ListItem = (props) => {
  return (
    <li className="list-item">
      <div>
        <input className="input-checkbox" type="checkbox" /> {props.nazev}{' '}
        {props.mnozstvi}
      </div>
      <img className="ikonka-delete" src="ikonka-delete" />
    </li>
  );
};

// položka bude props - input.value
//ikonka bude props
