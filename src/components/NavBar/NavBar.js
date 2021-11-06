import React from 'react';
import logo from '../Assets/BJLogo.png'
import './NavBar.css'
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const Navbar = () => {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={logo} alt="" className="tamanologo"></img>
                </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link to={`/`}>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  </Link>
                  <Link to={`/`}>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Noticias</a>
                  </li>
                  </Link>
                  <Link to={`/categorias/Ropa`}>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Ropa</a>
                  </li>
                  </Link>
                  <Link to={`/categorias/Accesorios`}>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Accesorios</a>
                  </li>
                  </Link>
                  <Link to={`/`}>
                  <li className='nav-item'>
                    <a className='nav-link active' aria-current='page' href='#'><CartWidget /></a>
                  </li>
                   </Link>
                </ul>
            </div>
            </div>
            </nav>
        </header>
  
        </>
    )
}

export default Navbar 
