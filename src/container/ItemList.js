import React from "react";
import Card from "../components/Card/Card";

const ItemList=({productList})=> {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {productList.map(producto => (
          <div className="col-md-4" key={producto.id}>
            <Card image={producto.image} title={producto.title} url={producto.url} categorias={producto.categorias} id={producto.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;