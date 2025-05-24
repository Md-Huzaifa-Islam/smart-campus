import React, { useState } from "react";

// Example product data (replace with props or API data)
const product = {
  id: 1,
  name: "Veg Burger",
  price: 80,
  vendor: "Vendor One",
  rating: 4.5,
  description: "A delicious veg burger with fresh veggies and special sauce.",
  image:
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
};

export default function MenuDetails() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="card bg-base-100 shadow-xl border flex flex-col md:flex-row">
        <figure className="md:w-1/2 p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title text-2xl mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-2">{product.description}</p>
          <p className="mb-1">
            <span className="font-semibold">Vendor:</span> {product.vendor}
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-medium">{product.rating}</span>
          </div>
          <div className="text-lg font-bold text-primary mb-4">
            ₹{product.price}
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-semibold">Quantity:</span>
            <button
              type="button"
              className="btn btn-xs btn-outline"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button
              type="button"
              className="btn btn-xs btn-outline"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <button className="btn btn-primary w-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
