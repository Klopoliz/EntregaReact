import React from "react";
import { Link } from "react-router-dom";
import './card.css'

function Card({ image, title, text, url,id,categorias}) {
  return (
    <Link to={`/Card/${id}`}>
    <div className={`card text-center bg-dark animate__animated animate__fadeInUp ${categorias}-category`}>
      <div className="overflow">
        <img src={image} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <span>Cat: {categorias}</span>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
          >
          Comprar {title}
        </a>
      </div>
    </div>
    </Link>
  );
}
export default Card;