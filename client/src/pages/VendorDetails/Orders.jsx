
import React, { useState } from "react";

const initialOrders = [
  { id: 1, name: "Veg Burger", price: "$5.99", status: "Pending" },
  { id: 2, name: "Grilled Sandwich", price: "$4.50", status: "Preparing" },
  { id: 3, name: "Chicken Wings", price: "$7.25", status: "Ready" },
];

const statusOptions = ["Pending", "Preparing", "Ready"];
const statusColor = {
  Pending: "text-yellow-600 bg-yellow-100",
  Preparing: "text-blue-600 bg-blue-100",
  Ready: "text-green-600 bg-green-100",
};

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Customer Orders</h2>
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
                <tr key={order.id} className="border-t hover:bg-blue-50 transition">
                  <td className="px-6 py-4">{order.name}</td>
                  <td className="px-6 py-4">{order.price}</td>
                  <td className="px-6 py-4">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className={`px-3 py-1 rounded-full text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-blue-200 ${statusColor[order.status]}`}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
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

export default Orders;
