import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

export const Itemlistcontainer = () => {
   
   const [productList, setProductList] = useState([]);
   const myList = [
      { title: "Barbijo", id: 1,Color:"Negro",description: "3 Capas", price: 200,imagen:{image1} }, // falta categoria para despues
      { title: "Buzo", id: 1,Color:"Negro",description: "100% Algodon, Logo estampado", price: 200,imagen:{image2} },
      { title: "Remera", id: 1,Color:"Negra",description: "100% Algodon, Logo estampado", price: 200,imagen:{image3} },
   ];
   console.log(productList);
   const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
      const products = 3;
      if (products === 0) {
         reject({ err: "no hay productos para mostrar" });
      } else {
         resolve(myList);
      }
   },2000);
   })
   useEffect(() => {
         promise
         .then((result) => {
            console.log(result);
            setProductList(result);
         })
         .catch((err) => {
            console.log(err);
         });
      }, []);
      return (
         <div>
         <ItemList productList={productList} /> 
      </div>
   );
};
export default Itemlistcontainer;