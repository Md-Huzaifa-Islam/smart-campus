import React, { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

const MyMenu = () => {
  const { user, loading } = useAuth();
  const [menuItems, setMenuItems] = React.useState([]);
  useEffect(() => {
    if (loading || !user) {
      console.log("User is not logged in or loading, skipping fetch.");
      return;
    }
    fetch(`${import.meta.env.VITE_API_URL}/menus/${user.mongoId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched menu items:", data, user.mongoId);
        setMenuItems(data);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, [user]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          My Menu Items
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
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
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
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
