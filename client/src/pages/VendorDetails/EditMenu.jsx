import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const EditMenu = () => {
  const { state } = useLocation();

  const [form, setForm] = useState({
    thumbnail: "",
    name: "",
    quantity: "",
    price: "",
  });

  // Prefill form when in edit mode
  useEffect(() => {
    if (state) {
      setForm({
        thumbnail: state.image || "",
        name: state.name || "",
        quantity: state.quantity || "",
        price: state.price?.replace("$", "") || "", // remove $ if present
      });
    }
  }, [state]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You'd normally check if it's update vs create
    console.log(state ? "Updated Menu Item:" : "New Menu Item:", form);
    // Clear form
    setForm({ thumbnail: "", name: "", quantity: "", price: "" });
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 py-10">
      <div className="w-full max-w-2xl bg-white border border-gray-100 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Edit Menu Item
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Thumbnail */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Image URL</label>
            <input
              name="thumbnail"
              type="url"
              value={form.thumbnail}
              onChange={handleChange}
              placeholder="Paste image URL"
              className="input input-bordered w-full bg-blue-50 border border-blue-200"
              required
            />
          </div>
          {/* Product Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="input input-bordered w-full bg-blue-50 border border-blue-200"
              required
            />
          </div>
          {/* Quantity */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Quantity</label>
            <input
              name="quantity"
              type="number"
              min="1"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Product Quantity"
              className="input input-bordered w-full bg-blue-50 border border-blue-200"
              required
            />
          </div>
          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price (₹)</label>
            <input
              name="price"
              type="number"
              min="1"
              value={form.price}
              onChange={handleChange}
              placeholder="Product Price"
              className="input input-bordered w-full bg-blue-50 border border-blue-200"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="pt-2">
            <button
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow hover:shadow-lg transition"
              type="submit"
            >
              Update Menu 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMenu;
