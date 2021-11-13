import ItemCount from '../ItemCount.js/ItemCount';
import React, {useState, useContext} from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/CartContext"

const ItemDetail = ({ id, stock, title, image, price, description }) => {
  
  const [buy, setBuy] = useState(false)
  const {onAdd} = useContext(Context)

  const agregar = (props)=>{
      setBuy(true)
      onAdd({id,title,price}, props.unidades)
      alert(`agregaste ${props.unidades} al carrito`)

  }

  
  
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
                        {!buy ? <ItemCount stock={stock} onAdd={agregar}/> : <Link to='/cart'><button>TErminar compra</button></Link>}
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default ItemDetail
