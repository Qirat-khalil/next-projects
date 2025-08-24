
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Cards = ({ title = "", data = [] }) => {
  const router = useRouter();

  return (
    <div className="container mt-3">
      <div className="text-center mb-4 mt-5">
        <h4>{title}</h4>
      </div>

      <div className="row">
        {data.map((card, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card shadow h-100 text-center mt-3">
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ height: "250px", objectFit: "cover", cursor: "pointer" }}
                onClick={() => router.push(`/product/${card.id}`)}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                {card.price && <p className="fw-bold">PKR {card.price}</p>}
                {card.price && (
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => console.log("Add to cart", card)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
