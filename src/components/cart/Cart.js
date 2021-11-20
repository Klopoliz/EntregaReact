import React, {useContext} from "react";
import { Context } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = ()=>{
    const {cart, ctotal, total} = useContext(Context)
    if(ctotal>=1){
            return(
            <>
            {cart.map((item)=>
            <>
            <div><img src={item.image}/></div>
            <div>
                <h2>nombre:{item.title}</h2>
                <h2>precio:{item.price}</h2>
                <h2>cantidad:{item.cantidad}</h2>
                <h2>subtotal:{item.subtotal}</h2>

            </div>
            </>
            )}
            <p>El total del carrito es {total} y tenes {ctotal} unidades</p>
        </>
            )
    }else{
        return(
        <>
        <p>No hay items en el carrito</p>
        <Link to={`/`}><p>Volver al inicio</p></Link>
        </>
        )
    }
}

export default Cart