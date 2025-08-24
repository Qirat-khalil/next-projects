
"use client";
import Cards from "../../component/cardsection/Cards";
import products from "../../component/productdata/Products";

export default function shirtPage(){
  let shirts = products.filter((p)=>p.category ==="shirt");
  return<Cards title="All Shirts Collection" data={shirts}/>
}