
"use client";
import Cards from "../../component/cardsection/Cards";

import products from "../../component/productdata/Products";


export default function JeansPage() {
  const jeans = products.filter((p) => p.category === "jeans");

  return <Cards title="All Jeans Collection" data={jeans} />;
}
