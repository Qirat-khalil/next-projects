

"use client";
import React from "react";
import Cards from '../cardsection/Cards';
import  products  from '../productdata/Products';


const Firstprod = () => {
  const jeans = products.filter((p) => p.category === "jeans");

  return <Cards title="Shop Jeans Category" data={jeans} />;
};

export default Firstprod;
