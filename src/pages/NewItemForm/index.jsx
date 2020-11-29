import React, { useState } from 'react';
import { db } from '../../db';
import { IconButton } from '../IconButton';

export const NewItemForm = (props) => {
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('seznamy')
      .doc(props.listId)
      .collection('kategorie')
      .doc(activeCategory)
      .collection('polozky')
      .add({
        nazev: itemName,
        mnozstvi: itemAmount,
        koupeno: false,
        // datumVytvoreni: firebase.firestore.FieldValue.serverTimestamp(),
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
          placeholder="  Nová položka"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <br />
        <input
          className="input"
          type="text"
          placeholder="  Množství (volitelné)"
          value={itemAmount}
          onChange={(event) => setItemAmount(event.target.value)}
        />
        <br />
      </div>
      <div className="kategorie-ikonky">
        {props.categories.map((category) => (
          <IconButton
            key={category.id}
            {...category}
            selected={category.id === activeCategory}
            onClick={() => {
              console.log(category.id);
              setActiveCategory(category.id);
            }}
          />
        ))}
      </div>
      <button className="btn-add-item" type="submit"></button>
    </form>
  );
};
