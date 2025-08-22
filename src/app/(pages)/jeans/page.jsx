"use client";
import React from "react";


const Pages = () => {
  

  const cardData = [
   { 
    id: 11,
      title: 'DENIM',
      image: '/assets/images/image (1).png',
      text: 'Shop the latest in denim styles.',
      price: 1200,
    },
  
    {
       id: 12,
      title: 'DRESS PAINT',
      image: '/assets/images/image (3).png',
      text: 'Explore sweaters fashion ',
      price: 1500,
    },

    {
      id: 13,
      title: 'WOMEN BOTTOMS',
      image: '/assets/images/image (11).png',
      text: 'Trendy collections of tees.',
      price: 1000,
    },
    {
      id: 14,
      title: 'DRESS PAINT',
      image: '/assets/images/image (3).png',
      text: 'Explore sweaters fashion ',
      price: 1800,
    },
     {
      title: 'BROWN PAINT',
      image: '/assets/images/image (12).png',
      text: 'Explore sweaters fashion ',
      price: 1500,
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