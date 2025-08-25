"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Cards = ({ title = "", data = [] }) => {
  const router = useRouter();


  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.03 },
  };

  return (
    <div className="container mt-3">
      <div className="text-center mb-4 mt-5">
        <h4>{title}</h4>
      </div>

      <div className="row">
        {data.map((card, index) => (
          <div className="col-md-6 col-lg-3 mb-3" key={index}>
            <motion.div
              className="card shadow h-100 text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{ padding: "10px" }} 
            >
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{
                  height: "200px",  
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "8px", 
                }}
                onClick={() => router.push(`/product/${card.id}`)}
              />
              <div className="card-body d-flex flex-column p-2">
                <h5 className="card-title" style={{ fontSize: "1rem" }}>
                  {card.title}
                </h5>
                <p className="card-text" style={{ fontSize: "0.85rem" }}>
                  {card.text}
                </p>
                {card.price && (
                  <p className="fw-bold" style={{ fontSize: "0.9rem" }}>
                    PKR {card.price}
                  </p>
                )}
                {card.price && (
                  <button
                    className="btn btn-primary mt-auto btn-sm"
                    onClick={() => console.log("Add to cart", card)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
