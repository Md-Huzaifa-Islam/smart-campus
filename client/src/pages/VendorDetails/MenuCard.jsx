import VendorCard from "../AllVendors/VendorCard";

export default function MenuCard({ items }) {
  // item of cart will be added to local storage
  const addToCart = (item) => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartData.findIndex((i) => i._id === item._id);

    if (existingItemIndex > -1) {
      // If item already exists, increase quantity
      cartData[existingItemIndex].quantity += 1;
    } else {
      // If item doesn't exist, add it with quantity 1
      cartData.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    alert(`${item.name} added to cart!`);
  };
  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className=" gap-8">
        <div
          key={items._id}
          className="bg-white w-60 rounded-xl shadow-lg overflow-hidden"
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
            <button
              onClick={() => addToCart(items)}
              className="mt-auto btn btn-primary w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
