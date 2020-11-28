import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { db } from '../../db.js';
import { ListItem } from '../ListItem/index.jsx';

export const ListCategory = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    return db
      .collection('seznamy')
      .doc(props.id)
      .collection('kategorie')
      .onSnapshot((querySnapshot) => {
        setCategories(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
  }, [props.id]);

  return categories.map((category) => (
    <div className="kategorie-container" key={category.id}>
      <div className="kategorie-list">
        <input className="input-checkbox-ktg" type="checkbox" />
        <button className="btn-kategorie" onClick={handleClick}>
          <img src="ikonka" /> {category.nazev}
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
  ));
};
