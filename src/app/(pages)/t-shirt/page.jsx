"use client";
import React from "react";


const Pages = () => {
  

  const cardData = [
    {
      id: 1,
      title: "White Shirt",
      image: "/assets/images/image (7).png",
      text: "Shop the latest in denim styles.",
      price: 1200,
    },
       { 
      id: 2,
      title: 'WAFFLE LONG SELEEVES',
      image: '/assets/images/image (4).png',
      text: 'Shop the latest in denim styles.',
      price: 2000,
    },
    {
      id: 3,
      title: 'TEES',
      image: '/assets/images/image (6).png',
      text: 'Trendy collections of tees.',
      price: 13000,
    },
    {
      id: 4,
      title: "ORGANIC CREW",
      image: "/assets/images/image (10).png",
      text: "Explore sweaters fashion ",
      price: 1800,
    },
    {
      id: 5,
      title: "SHIRT",
      image: "/assets/images/image.png",
      text: "Explore men’s fashion.",
      price: 1500,
    },
    {
      id: 6,
      title: "TEES",
      image: "/assets/images/image (5).png",
      text: "Trendy collections of tees.",
      price: 1000,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h3>Our Products</h3>
      </div>

      <div className="row">
        {cardData.map((card) => (
          <div className="col-md-6 col-lg-3 mb-4" key={card.id}>
            <div className="card shadow h-100 text-center">

              <img
                src={card.image}
                alt={card.title}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />


              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <p className="fw-bold">PKR {card.price}</p>


                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addToCart(card)} >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pages;
