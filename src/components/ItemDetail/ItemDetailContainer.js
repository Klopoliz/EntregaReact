import React, { useState, useEffect } from 'react';
import  ItemDetail  from './ItemDetail.js';
import  data  from '../../Data/Data';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItem(res.find((i) => i.id === id));
      })
      .finally(() => setLoader(false));
  }, [id]);

  return loader ? <h3>Cargando...</h3> : <ItemDetail {...item} />;
};