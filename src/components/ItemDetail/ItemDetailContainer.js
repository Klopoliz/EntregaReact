import React, { useState, useEffect } from 'react';
import  ItemDetail  from './ItemDetail.js';
import { useParams } from 'react-router-dom';
import db from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoader(true);

    const myItem = doc(db, 'productos', itemId);

    getDoc(myItem)
      .then((res) => {
        const result = { id: res.id, ...res.data() };
        setProduct(result);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return loader ? <h1>CARGANDO...</h1> : <ItemDetail {...product} />;
};