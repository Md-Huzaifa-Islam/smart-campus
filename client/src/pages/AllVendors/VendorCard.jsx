import React from "react";
import { Link } from "react-router-dom";

// Example vendor data (replace with props or API data)
const vendors = [
  {
    id: 1,
    name: "Vendor One",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    productCount: 12,
    description: "Best snacks and drinks in campus.",
  },
  {
    id: 2,
    name: "Vendor Two",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    productCount: 8,
    description: "Fresh bakery and coffee.",
  },
  {
    id: 3,
    name: "Vendor Three",
    image:
      "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    productCount: 20,
    description: "Delicious meals and fast service.",
  },
];

export default function VendorCard() {
  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="card bg-base-100 shadow-xl border hover:shadow-2xl transition"
          >
            <figure className="px-6 pt-6">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="rounded-xl w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-2xl">{vendor.name}</h3>
              <p className="text-gray-500">{vendor.description}</p>
              <div className="badge badge-primary badge-outline my-2">
                {vendor.productCount} Products
              </div>
              <div className="card-actions mt-4">
                <Link to={`/vendor/${vendor.id}`} className="btn btn-primary">
                  Show Menu
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
