import React, {useContext} from "react";
import { Context } from "../../context/CartContext";

const Cart = ()=>{
    const {cart, unidades, total} = useContext(Context)

    return(
        <>
        <p>El total del carrito es {total} y tenes {unidades} unidades</p>
        {cart.map((item)=>
            <div>
                <h2>nombre:{item.title }</h2>
                <h2>precio:{item.price}</h2>
                <h2>cantidad:{item.cantidad}</h2>
                <h2>subtotal:{item.subtotal}</h2>
                <button>{item.id} </button>
            </div>
            )}
        </>
    )
}

export default Cart