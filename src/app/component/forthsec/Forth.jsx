

"use client";
import React from "react";
import Cards from "../cardsection/Cards";
import  products  from "../productdata/Products";

const Forth = () => {
  const shirts = products.filter((p) => p.category === "shirt");

  return <Cards title="Shirt Collection" data={shirts} />;
};

export default Forth;

