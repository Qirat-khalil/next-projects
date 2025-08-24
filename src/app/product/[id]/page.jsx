"use client";
import { useParams } from "next/navigation";
import Products from "../../component/productdata/Products"; 

export default function ProductDetail() {
  const { id } = useParams();
  const product = Products.find((p) => p.id == id);

  if (!product) {
    return <div className="text-center mt-10"> Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="showrating">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.text}</p>
          <h4 className="text-xl text-green-600 mt-4">PKR {product.price}</h4>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800">
             Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
