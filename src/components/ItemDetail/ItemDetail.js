import React from 'react';

const ItemDetail = ({ id, title, image, price, description }) => {
  return !id ? (
    <h1>EL ITEM NO EXISTE</h1>
  ) : (
    <>
      <div className="card mb-3" style={{maxWidth: 1200}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start" alt={title}></img>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">${price}</small></p>
                        <a href='#!' className='btn btn-outline-dark'>Agregar al Carrito</a>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default ItemDetail
