import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const statusColor = {
  Pending: "text-yellow-600 bg-yellow-100",
  Preparing: "text-blue-600 bg-blue-100",
  Ready: "text-green-600 bg-green-100",
};

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (!user) {
      console.error("User is not logged in, cannot fetch orders.");
      setOrders([]); // Fallback to dummyOrders if user is not logged in
      return;
    }
    fetch(`${import.meta.env.VITE_API_URL}/orders/buyer/${user.mongoId}`) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched orders:", data);
        setOrders(data.length > 0 ? data : []); // Use dummyOrders if no data
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setOrders([]); // Fallback to dummyOrders if fetch fails
      });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          My Orders
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-blue-100 text-blue-700">
                <th className="text-left px-6 py-3 font-medium">Item Name</th>
                <th className="text-left px-6 py-3 font-medium">Price</th>
                <th className="text-left px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-t hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4">{order.name}</td>
                  <td className="px-6 py-4">{order.price}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusColor[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
