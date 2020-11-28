import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { db } from '../../db.js';
import { Category } from '../Category/index.jsx';
import { ListItem } from '../ListItem/index.jsx';

export const ListCategory = (props) => {
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
    <Category key={category.id} {...category} />
  ));
};
