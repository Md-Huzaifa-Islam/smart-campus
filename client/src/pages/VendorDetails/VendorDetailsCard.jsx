import MenuCard from "./MenuCard";

// Dummy vendor data
const vendor = {
  id: "vnd001",
  name: "Vendor One",
  role: "vendor",
};

// Dummy menu items for this vendor


const menuItems = [
  {
    id: 1,
    name: "Veg Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
    quantity: 20,
    price: 80,
    details: "A delicious vegetarian burger with fresh veggies and cheese.",
    vendor: "Vendor One"
  },
  {
    id: 2,
    name: "Cold Coffee",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    quantity: 15,
    price: 60,
    details: "Chilled coffee with a creamy texture and chocolate topping.",
    vendor: "Vendor One"
  },
  {
    id: 3,
    name: "French Fries",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    quantity: 30,
    price: 50,
    details: "Crispy golden fries served with ketchup.",
    vendor: "Vendor One"
  },
  {
    id: 4,
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1516685018646-5499d0a7d42f?auto=format&fit=crop&w=400&q=80",
    quantity: 10,
    price: 120,
    details: "Classic pizza with tomato, mozzarella, and basil.",
    vendor: "Vendor One"
  },
  {
    id: 5,
    name: "Pasta Alfredo",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    quantity: 12,
    price: 100,
    details: "Creamy Alfredo pasta with parmesan and herbs.",
    vendor: "Vendor One"
  },
  {
    id: 6,
    name: "Fresh Salad",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    quantity: 18,
    price: 70,
    details: "A healthy mix of fresh greens and vegetables.",
    vendor: "Vendor One"
  }
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

      {/* All Menu Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
