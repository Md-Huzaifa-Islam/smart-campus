import React from "react";
import VendorCard from "./VendorCard";
import { Link } from "react-router-dom";

export default function AllVendors() {
  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-primary">
          Explore Campus Vendors
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Discover the best food, snacks, and drinks from our trusted vendors.
          Click "Show Menu" to see what each vendor offers!
        </p>
        <VendorCard />
      </div>
      <Link to="/allVendors" className="btn btn-primary btn-block mt-8">
        See More
      </Link>
    </div>
  );
}
