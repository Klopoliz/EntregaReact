import React from "react";
import Card from "../components/Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Barbijo",
    image: image1,
    url: "",
  },
  {
    id: 2,
    title: "Buzo",
    image: image2,
    url: "",
  },
  {
    id: 3,
    title: "Remera",
    image: image3,
    url: "",
  },
];

function ItemList() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;