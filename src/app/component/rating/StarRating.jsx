// components/StarRating.js
import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "2px", marginBottom: "5px" }}>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          size={12}   // chhota size (pehle 16px tha)
          color={i < rating ? "gold" : "lightgray"}
        />
      ))}
    </div>
  );
};

export default StarRating;
