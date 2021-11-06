import './App.css';
import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './container/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
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
            path="/categorias/:catId"
            element={<section className="fondo">
            <div className="container pt-5">
            <ItemListContainer className="container"/>
            </div>
            </section>}
          />
          <Route path="/Card/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
