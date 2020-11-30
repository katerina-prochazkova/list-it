import React, { useEffect, useState } from 'react';
import { db } from '../../db.js';
import { Category } from '../Category/index.jsx';
import { NewItemForm } from '../NewItemForm/index.jsx';

export const ListCategory = (props) => {
  const [categories, setCategories] = useState([]);
  const [defaultCategory, setDefaultCategory] = useState(null);

  useEffect(() => {
    return db
      .collection('seznamy')
      .doc(props.id)
      .collection('kategorie')
      .orderBy('poradi')
      .onSnapshot((querySnapshot) => {
        setCategories(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );

        const ostatni = querySnapshot.docs.filter((doc) => {
          return doc.data().nazev === 'ostatní';
        });
        console.log(ostatni.id);
        setDefaultCategory(ostatni.id);
      });
  }, [props.id]);

  return (
    <>
      <NewItemForm
        listId={props.id}
        categories={categories}
        default={defaultCategory}
      />
      {categories.map((category) => (
        <Category key={category.id} {...category} listId={props.id} />
      ))}
    </>
  );
};
