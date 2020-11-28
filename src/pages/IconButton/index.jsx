import React, { useState } from 'react';

export const IconButton = (props) => {
  return (
    <button
      className={props.selected ? 'btn-icon btn-icon--selected' : 'btn-icon'}
      onClick={props.onClick}
    >
      <img className="ikonky-volba" src={`/assets/${props.ikona}.svg`} />
    </button>
  );
};
