const promise = new Promise((resolve,reject) => {
    const products = 3
    if (products === 0) {
      reject({err: 'no hay productos para mostrar'})
    }else {
      resolve([
        {title:'Buzo', id:1, description:'Negro 100%Algodon', price:2000},
        {title:'Barbijo', id:2, description:'Negro con 3 capas', price:380},
        {title:'Remera', id:3, description:'Negro 100%Algodon', price:1350}
    ])
    }
  });
  promise.then((result) => {
    console.log(result)
    // setProducts(result)
  }).catch((err) => {
    console.log(err)
  })