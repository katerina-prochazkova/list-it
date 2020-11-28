import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ListChoice = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // doplnit kód pro firebase
    history.push(`/list/${66}`);
    //tady pak upravit 66 dle firebase
    console.log('list type je nastavený na' + listType);
  };

  const [listType, setListType] = useState('');
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
          />
          Přání
        </label>
      </li>
      <li className="new-list--type">
        <input
          type="text"
          placeholder="... a bude se jmenovat"
          className="new-list--name"
        />
        <button type="submit" className="create-list">
          Vytvořit
        </button>
      </li>
    </form>
  );
};

export default ListChoice;
