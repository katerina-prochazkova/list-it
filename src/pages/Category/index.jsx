import React, { useState } from 'react';
import { ListItem } from '../ListItem';

export const Category = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="kategorie-container">
      <div className="kategorie-list">
        <input className="input-checkbox-ktg" type="checkbox" />
        <button className="btn-kategorie" onClick={handleClick}>
          <img src="ikonka" /> {props.nazev}
          <img src="ikonka" />
        </button>
        <img className="ikonka-delete" src="ikonka-delete" />
        {/* <!-- na klik rozbalí a zabalí ten ul na klik se taky změní ta rozbal ikonka z trojuhelníku dolů na trojuhelník nahoru --> */}
      </div>
      {active ? (
        <ul className="list">
          <ListItem name="Rohlíky" amount="5" />
          <ListItem name="Jablka" amount="1kg" />
          {/* list item se zmapuje */}
        </ul>
      ) : null}
    </div>
  );
};
