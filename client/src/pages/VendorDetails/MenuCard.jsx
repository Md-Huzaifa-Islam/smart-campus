import React, { useState } from "react";
import VendorCard from "../AllVendors/VendorCard";

// Example menu data (replace with props or API data)
const menuItems = [
  {
    id: 1,
    name: "Veg Burger",
    price: 80,
    vendor: "Vendor One",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Cold Coffee",
    price: 60,
    vendor: "Vendor One",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "French Fries",
    price: 50,
    vendor: "Vendor One",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
  },
];

export default function MenuCard() {
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta),
    }));
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Vendor Menu
      </h2>
      <div className="">
        <MenuCard />
      </div>
    </div>
  );
}
