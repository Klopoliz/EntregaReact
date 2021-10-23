import React from 'react';
import Cards from './Cards'

 export const Itemlistcontainer = () => {
    const promise = new Promise((resolve,reject) => {
        const products = 41
        if (products === 0) {
            reject({err: 'no hay productos para mostrar'})
        }else {
            resolve([{title:'titulo', id:1, description:'description', price:200}])
        }
    });
    promise.then((result) => {
        console.log(result)
        // setProducts(result)
    }).catch((err) => {
        console.log(err)
    })
    return (
        <div>
            <Cards/>
        </div>
    )
}

export default Itemlistcontainer