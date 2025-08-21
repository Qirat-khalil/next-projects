"use client"
import React from 'react';

const Cards = () => {
  
  const cardData = [
    {
      title: 'SHIRT',
      image: '/assets/images/image.png',
      text: 'Explore men’s fashion .',
    },
    {
      title: 'DENIM',
      image: '/assets/images/image (1).png',
      text: 'Shop the latest in denim styles.',
    },
    {
      title: 'TEES',
      image: '/assets/images/image (5).png',
      text: 'Trendy collections of tees.',
    },
    {
      title: 'SWEATERS',
      image: '/assets/images/image (3).png',
      text: 'Explore sweaters fashion ',
    },
    
  ];

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h4>Shop By Category</h4>
      </div>

      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card shadow h-100">
              <img 
                src={card.image} 
                className="card-img-top" 
                alt={card.title} 
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
