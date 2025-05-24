import VendorCard from "../AllVendors/VendorCard";

export default function MenuCard({ items }) {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          key={items._id}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src={items.image}
            alt={items.name}
            className="h-48 w-48 object-cover"
          />
          <div className="p-5 w-full flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              {items.name}
            </h3>
            <div className="flex justify-between itemss-center mb-2">
              <span className="font-semibold text-green-600">
                ₹{items.price}
              </span>
            </div>
            <button className="mt-auto btn btn-primary w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
