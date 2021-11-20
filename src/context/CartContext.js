import React, {useState} from "react";

const Context = React.createContext()

const CartFuncion = ({children}) =>{
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)
    const [ctotal, setCtotal] = useState(0)

/*     No anda
    const handleRemoveItem = (e) => {
        const id = e.target.getAttribute("id")
         updateList(list.filter(item => item.id !== id));
       }; */

    const onAdd = (producto, cantidad) =>{
        const itemExiste=cart.find(item=>item.id===producto.id)
        if(!itemExiste){
            setCart([...cart, {image:producto.image,id:producto.id, title:producto.title,cant:cantidad, price:producto.price, cantidad:cantidad, subtotal:(producto.price*cantidad)}])
            setTotal(total+(producto.price*cantidad))
            setCtotal(ctotal+cantidad)
            setUnidades(unidades+1)
        } else {
            const cartAux=cart.map((item)=>{
                if(item.id===producto.id){
                    item.cantidad+=cantidad
                    item.subtotal+=(producto.price*cantidad)
                }
                return item
            })
            setCart(cartAux)
            setTotal(total+(producto.price*cantidad))
            setCtotal(ctotal+producto.cantidad)
        }
    } 

    return <Context.Provider value={{cart, unidades, total,ctotal, onAdd}}>
        {children}
    </Context.Provider>

    }


export {CartFuncion, Context }