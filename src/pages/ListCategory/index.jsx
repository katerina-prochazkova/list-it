import React, { useState } from 'react';
import { render } from 'react-dom';
import { ListItem } from '..pages/List Item/index.jsx';

export const ListCategory = (props) => {
  return (
    <div className="kategorie-container">
      <div className="kategorie-list">
        <input className="input-checkbox-ktg" type="checkbox" />
        <button className="btn-kategorie">
          <img src="ikonka" /> tohle bude kategorie s rozbalovací ikonkou
          <img src="ikonka" />
        </button>
        <img className="ikonka-delete" src="ikonka-delete" />
        {/* <!-- na klik rozbalí a zabalí ten ul na klik se taky změní ta rozbal ikonka z trojuhelníku dolů na trojuhelník nahoru --> */}
      </div>
      <ul className="list">
        <ListItem name="Rohlíky" amount="5" />
        <ListItem name="Jablka" amount="1kg" />
        {/* list item se zmapuje */}
      </ul>
    </div>
  );
};
