import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import data from "../Data/Data";
import { useParams } from 'react-router-dom';

const Itemlistcontainer = (props) => {
   
   const [productList, setProductList] = useState([]);
   const [Cargando, setCargando] = useState(true);
   const { catId } = useParams();
   const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
      const products = 3;
      if (products === 0) {
         reject({ err: "no hay productos para mostrar" });
      } else {
         resolve(data);
      }
   },2000);
   })
   useEffect(() => {
         promise
         .then((result) => {
            /* setProductList(result); */
            catId ? setProductList(result.filter((i) => i.categorias === catId)) : setProductList(result);
            setCargando(false);
         })
         .catch((err) => {
            console.log(err);
         });
      }, [catId]);
      return (
         <div>
         <h1>{props.title}</h1>
         {Cargando ? <h2>Se estan cargando los productos</h2> : <ItemList productList={productList} /> }
      </div>
   );
};
export default Itemlistcontainer;