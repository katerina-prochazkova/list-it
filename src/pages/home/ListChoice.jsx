import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../../db';

const ListChoice = () => {
  const history = useHistory();
  const [listType, setListType] = useState('');
  const [listName, setListName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('seznamy')
      .add({ nazev: listName, typ: listType })
      .then((doc) => {
        history.push(`/list/${doc.id}`);
      });

    console.log('list type je nastavený na' + listType);
  };

  const handleRadioChange = (e) => {
    setListType(e.target.value);
  };

  return (
    <form className="new-list--form" onSubmit={handleSubmit}>
      <label className="new-list--intro">Bude to seznam...</label>
      <li className="new-list--type">
        <label htmlFor="shop">
          <input
            type="radio"
            id="shop"
            name="list"
            onChange={handleRadioChange}
            value="shop"
          />
          Nákupní
        </label>
      </li>
      <li className="new-list--type">
        <label htmlFor="travel">
          <input
            type="radio"
            id="travel"
            name="list"
            onChange={handleRadioChange}
            value="travel"
          />
          Cestovní
        </label>
      </li>
      <li className="new-list--type">
        <label htmlFor="wish">
          <input
            type="radio"
            id="wish"
            name="list"
            onChange={handleRadioChange}
            value="wish"
          />
          Přání
        </label>
      </li>
      <li className="new-list--type">
        <input
          type="text"
          placeholder="... a bude se jmenovat"
          className="new-list--name"
          value={listName}
          onChange={(event) => {
            setListName(event.target.value);
          }}
        />
        <button type="submit" className="create-list">
          Vytvořit
        </button>
      </li>
    </form>
  );
};

export default ListChoice;
