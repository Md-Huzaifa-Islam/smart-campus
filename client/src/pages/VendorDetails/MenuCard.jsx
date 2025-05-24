import VendorCard from "../AllVendors/VendorCard";

// Example menu data (replace with props or API data)
const menuItems = [
  {
    id: 1,
    name: "Veg Burger",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
    quantity: 20,
    price: 80,
    details: "A delicious vegetarian burger with fresh veggies and cheese.",
    vendor: "Vendor One",
  },
  // Add more items as needed
];

export default function MenuCard() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-blue-700">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-2">{item.details}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-green-600">
                  ₹{item.price}
                </span>
                <span className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </span>
              </div>
              <button className="mt-auto btn btn-primary w-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
