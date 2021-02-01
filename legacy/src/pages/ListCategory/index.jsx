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

        const ostatniId = querySnapshot.docs[querySnapshot.docs.length - 1].id;
        setDefaultCategory(ostatniId);
      });
  }, [props.id]);

  return (
    <>
      <NewItemForm
        listId={props.id}
        categories={categories}
        default={defaultCategory}
        listType={props.type}
      />
      {categories.map((category) => (
        <Category key={category.id} {...category} listId={props.id} />
      ))}
    </>
  );
};
