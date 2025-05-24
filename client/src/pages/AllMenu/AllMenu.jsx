import { useEffect, useState } from "react";
import VendorCard from "../AllVendors/VendorCard";
import Card from "./Card";
import { Link } from "react-router-dom";

const AllMenu = () => {
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
    <>
      <div className="min-h-screen pb-16 pt-20 md:pt-28  bg-slate-100  dark:text-gray-200 transition duration-300">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center text-[#544efcba] mb-10">
            All Vendors
          </h1>
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-6 justify-between items-center flex-col md:flex-row">
              {/* <div className="relative w-full md:w-3/4 lg:w-1/2">
                <input
                  type="text"
                  placeholder="Search by title"
                  className="border border-gray-700 outline-none pl-12 py-2 rounded-full w-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 shadow-sm focus:ring focus:ring-blue-500"
                />
              </div> */}
            </div>
          </div>
          <div className="  py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* show only first 3 vendors */}
              {vendors.map((vendor) => (
                <div
                  key={vendor._aid}
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
                      {vendor.menu || 0} Products
                    </div>
                    <div className="card-actions mt-4">
                      <Link
                        to={`/vendor/${vendor._id}`}
                        className="btn btn-primary"
                      >
                        Show Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch"></div>
          <div className="mt-8 flex justify-center space-x-2"></div>
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-2"></div>
    </>
  );
};

export default AllMenu;
