import './App.css';
import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './container/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import React from 'react'
import {CartFuncion} from './context/CartContext'
import Cart from './components/cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
      <CartFuncion>
        <Navbar className="fondonav"/>  
        <Routes>
          <Route
            path="/"
            element={<section className="fondo">
            <div className="container pt-5">
            <ItemListContainer className="container"/>
            </div>
            </section>}
          />
          <Route
            path="/cart"
            element={<section className="fondo">
            <div className="container pt-5">
            <Cart className="container"/>
            </div>
            </section>}
          />
          <Route
            path="/categorias/:catId"
            element={<section className="fondo">
            <div className="container pt-5">
            <ItemListContainer className="container"/>
            </div>
            </section>}
          />
          <Route path="/Card/:id" element={<ItemDetailContainer />} />
        </Routes>
        </CartFuncion>
      </BrowserRouter>
    </>
  );
}

export default App;
