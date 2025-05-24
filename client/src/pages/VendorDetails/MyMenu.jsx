
import React from "react";

const dummyMenuItems = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    image: "https://source.unsplash.com/400x300/?spaghetti",
    price: "$12.99",
  },
  {
    id: 2,
    name: "Chicken Caesar Salad",
    image: "https://source.unsplash.com/400x300/?salad",
    price: "$10.50",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    image: "https://source.unsplash.com/400x300/?pizza",
    price: "$8.99",
  },
  {
    id: 4,
    name: "Sushi Platter",
    image: "https://source.unsplash.com/400x300/?sushi",
    price: "$15.25",
  },
];

const MyMenu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">My Menu Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dummyMenuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-36">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <div className="flex justify-between items-center mt-2 text-gray-600">
                  <span className="text-md font-medium">{item.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMenu;
