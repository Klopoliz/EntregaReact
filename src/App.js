import './App.css';
import Navbar from './components/NavBar'
import Itemlistcontainer from './container/ItemListContainer';

function App() {
  return (
    <>
      <Navbar className="fondonav"/>
      <section className="fondo">
      <div className="container pt-5">
      <Itemlistcontainer className="container"/>
      </div>
      </section>
    </>
  );
}

export default App;
