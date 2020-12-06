import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../../db';

export const ListChoice = () => {
  const history = useHistory();
  const [listType, setListType] = useState('');
  const [listName, setListName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('seznamy')
      .add({ nazev: listName, typ: listType })
      .then((doc) => {
        const category = doc.collection('kategorie');
        if (listType === 'shop') {
          category.add({
            nazev: 'ostatní',
            ikona: 'threedots',
            poradi: 4,
          });
          category.add({
            nazev: 'lékárna',
            ikona: 'bandaid',
            poradi: 3,
          });
          category.add({
            nazev: 'drogerie',
            ikona: 'toiletpaper',
            poradi: 2,
          });
          category.add({
            nazev: 'nápoje',
            ikona: 'bottle',
            poradi: 1,
          });
          category.add({
            nazev: 'jídlo',
            ikona: 'plate',
            poradi: 0,
          });
        } else if (listType === 'travel') {
          category.add({
            nazev: 'ostatní',
            ikona: 'threedots',
            poradi: 5,
          });
          category.add({
            nazev: 'vybavení',
            ikona: 'camera',
            poradi: 4,
          });
          category.add({
            nazev: 'lékárna',
            ikona: 'bandaid',
            poradi: 3,
          });
          category.add({
            nazev: 'drogerie',
            ikona: 'toiletpaper',
            poradi: 2,
          });
          category.add({
            nazev: 'nápoje',
            ikona: 'bottle',
            poradi: 1,
          });
          category.add({
            nazev: 'jídlo',
            ikona: 'plate',
            poradi: 0,
          });
        } else if (listType === 'wish') {
          category.add({
            nazev: 'ostatní',
            ikona: 'threedots',
            poradi: 1,
          });
          category.add({
            nazev: 'dárky',
            ikona: 'gift',
            poradi: 0,
          });
        } else if (listType === 'univ') {
          category.add({
            nazev: '',
            ikona: 'univ-btn',
            poradi: 1,
          });
        }
        history.push(`/list/${doc.id}`);
      });
  };

  const handleRadioChange = (e) => {
    setListType(e.target.value);
  };

  return (
    <form className="new-list--form" onSubmit={handleSubmit}>
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
        <label htmlFor="univ">
          <input
            type="radio"
            id="univ"
            name="list"
            onChange={handleRadioChange}
            value="univ"
          />
          Univerzální
        </label>
      </li>
      <li className="new-list--type">
        <input
          type="text"
          placeholder="... a bude se jmenovat"
          maxLength="30"
          className="new-list--name"
          value={listName}
          onChange={(event) => {
            setListName(event.target.value);
          }}
        />
        <button
          type="submit"
          className="create-list"
          disabled={listName === '' || listType === ''}
        >
          Vytvořit
        </button>
      </li>
    </form>
  );
};
