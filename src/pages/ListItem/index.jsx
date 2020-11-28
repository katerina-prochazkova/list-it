import React from 'react';

export const ListItem = (props) => {
  return (
    <li className="list-item">
      <div>
        <input className="input-checkbox" type="checkbox" />{' '}
        <img src="ikonka" />
        {props.name} {props.amount}
      </div>
      <img className="ikonka-delete" src="ikonka-delete" />
    </li>
  );
};

// položka bude props - input.value
//ikonka bude props
