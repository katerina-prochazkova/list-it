import React, { useEffect, useState } from 'react';
import { db } from '../../db';
import firebase from 'firebase/app';
import { IconButton } from '../IconButton';

export const NewItemForm = (props) => {
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (props.default !== null) {
      setActiveCategory(props.default);
    }
  }, [props.default]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(activeCategory);
    db.collection('seznamy')
      .doc(props.listId)
      .collection('kategorie')
      .doc(activeCategory)
      .collection('polozky')
      .add({
        nazev: itemName,
        mnozstvi: itemAmount,
        koupeno: false,
        datumVytvoreni: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setItemName('');
    setItemAmount('');
  };

  return (
    <form className="form-list" onSubmit={handleSubmit}>
      <div className="new-input">
        <input
          className="input"
          type="text"
          placeholder="Nová položka"
          maxLength="40"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Množství (volitelné)"
          maxLength="20"
          value={itemAmount}
          onChange={(event) => setItemAmount(event.target.value)}
        />
        <button className="btn-add-item" type="submit"></button>
      </div>
      <div className="kategorie-ikonky">
        {props.categories.map((category) => (
          <IconButton
            key={category.id}
            {...category}
            selected={category.id === activeCategory}
            onClick={() => {
              setActiveCategory(category.id);
            }}
          />
        ))}
      </div>
    </form>
  );
};
