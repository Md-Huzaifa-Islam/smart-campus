import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VendorCard() {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/users") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setVendors(data);
      })
      .catch((error) => {
        console.error("Error fetching vendor data:", error);
      });
  }, []);
  return (
    <div className=" bg-base-200 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* show only first 3 vendors */}
        {vendors.slice(0, 3).map((vendor) => (
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
              <h3 className="card-title text-2xl text-black">{vendor.name}</h3>
              <p className="text-gray-500">{vendor.description}</p>

              <div className="card-actions mt-4">
                <Link to={`/vendor/${vendor.id}`} className="btn btn-primary">
                  Show Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
