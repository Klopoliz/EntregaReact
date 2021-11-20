import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import db from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const ItemListContainer = ({ props }) => {
   const [items, setItems] = useState([]);
   const [loader, setLoader] = useState(true);
 
   const { categoryId } = useParams();
 
   useEffect(() => {
     setLoader(true);
 
     const myItems = categoryId
       ? query(collection(db, 'productos'), where('categorias', '==', categoryId))
       : collection(db, 'productos');
 
     getDocs(myItems)
       .then((res) => {
         const results = res.docs.map((doc) => {
           return { ...doc.data(), id: doc.id };
         });
 
         setItems(results);
       })
       .finally(() => setLoader(false));
   }, [categoryId]);
   return loader ? (
      <h2>CARGANDO...</h2>
    ) : (
      <>
        <h3 style={{ textAlign: 'center' }}>{props}</h3>
        <ItemList productList={items} />
      </>
    );
  };