import React from 'react';

const Forth = () => {
  const cardData = [
    {
      title: 'White Shirt',
      image: '/assets/images/image (7).png',
      text: 'Shop the latest in denim styles.',
    },
    {
      title: 'WAFFLE LONG SELEEVES',
      image: '/assets/images/image (4).png',
      text: 'Shop the latest in denim styles.',
    },
    {
      title: 'TEES',
      image: '/assets/images/image (6).png',
      text: 'Trendy collections of tees.',
    },
    {
      title: 'ORGANIC CREW',
      image: '/assets/images/image (10).png',
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
            <div className="card shadow h-100 text-center">
              {/* ✅ Fixed Image */}
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{
                  height: "250px",   // sari images 250px height
                  objectFit: "cover" // cut/fit kar dega
                }}
              />
              <div className="card-body d-flex flex-column justify-content-center">
                {/* ✅ Same size text */}
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

export default Forth;
