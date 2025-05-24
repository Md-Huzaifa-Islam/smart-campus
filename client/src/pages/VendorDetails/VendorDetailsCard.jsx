import React from "react";
import MenuCard from "./MenuCard";

// Demo vendor info (replace with props or fetched data)
const vendor = {
  id: "vnd123",
  name: "Vendor One",
  role: "vendor",
};

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

export default function VendorDetailsCard() {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-2xl">
      {/* Vendor Info */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
          {vendor.name}
        </h1>
        <p className="text-lg text-gray-600 mb-1">
          <span className="font-semibold">ID:</span> {vendor.id}
        </p>
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-semibold text-sm shadow">
          {vendor.role.charAt(0).toUpperCase() + vendor.role.slice(1)}
        </span>
      </div>

      {/* Menu Items */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
