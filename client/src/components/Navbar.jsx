import { Link, useNavigate, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const [shopOpen, setShopOpen] = useState(true);

  // Cart data from localStorage
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `btn mr-3 ${
            isActive
              ? "bg-gradient-to-bl to-blue-500 from-purple-500 text-white"
              : "hover:bg-transparent hover:text-white transition"
          }`
        }
        to="/"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `btn mr-3 ${
            isActive
              ? "bg-gradient-to-bl to-blue-500 from-purple-500 text-white"
              : "transition"
          }`
        }
        to="/allVendors"
      >
        <li>All Vendors</li>
      </NavLink>
      {
        user?.role === "vendor" && (
          <>
            <NavLink
              className={({ isActive }) =>
                `btn mr-3 ${
                  isActive
                    ? "bg-gradient-to-bl to-blue-500 from-purple-500 text-white"
                    : "transition"
                }`
              }
              to="/addMenu"
            >
              <li>Add Menu</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `btn mr-3 ${
                  isActive
                    ? "bg-gradient-to-bl to-blue-500 from-purple-500 text-white"
                    : "transition"
                }`
              }
              to="/myMenu"
            >
              <li>My Menu</li>
            </NavLink>
          </>
        )
      }
      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              `btn mr-3 ${
                isActive
                  ? "bg-gradient-to-bl to-blue-500 from-purple-500 text-white"
                  : "transition"
              }`
            }
            to="/myOrders"
          >
            <li>My Orders</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `btn mr-3 ${
                isActive
                  ? "bg-gradient-to-bl to-blue-500 from-purple-500 text-white"
                  : "transition"
              }`
            }
            to="/orders"
          >
            <li>Orders</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `btn mr-3 ${
                isActive
                  ? "bg-gradient-to-bl to-blue-500 from-purple-500 text-white"
                  : "transition"
              }`
            }
            to="/dashboard"
          >
            <li>Dashboard</li>
          </NavLink>
        </>
      )}
    </>
  );

  const handleSignout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User signed out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch(() => {});
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50 shadow-md transition duration-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="hidden md:block">
          <Link
            onClick={() => navigate("/")}
            className="btn flex gap-4 btn-ghost text-xl hover:bg-transparent hover:border-none"
          >
            Smart Campus
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user && (
          <>
            {/* Cart Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator border p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cartData.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <div className="mb-2 max-h-32 overflow-y-auto">
                    {cartData.map((item, index) => (
                      <div key={item.id} className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-black">
                          {index + 1}. {item.name}
                        </span>
                        <span className="text-xs text-gray-500 ml-auto">
                          x{item.quantity}
                        </span>
                        <span className="text-xs text-green-600 font-semibold ml-2">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="text-lg font-bold text-black">
                    {totalItems} Items
                  </span>
                  <span className="text-info">Subtotal: ₹{subtotal}</span>
                  <div className="card-actions flex flex-col gap-2 mt-2">
                    <button
                      className="btn btn-success btn-block"
                      onClick={() => navigate("/buy-now")}
                      disabled={cartData.length === 0}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Vendor Toggle Button */}
            {user?.role !== "vendor" && (
              <>
                <button
                  onClick={() => setShopOpen(!shopOpen)}
                  className={`btn btn-sm ${
                    shopOpen
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  {shopOpen ? "Open" : "Closed"}
                </button>
                
              </>
            )}

            {/* Avatar */}
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  data-tooltip-place="top"
                  src={user?.photoURL}
                />
                <Tooltip id="my-tooltip" />
              </div>
            </div>

            {/* Sign Out */}
            <button
              onClick={handleSignout}
              className="btn btn-sm btn-outline ml-2 dark:bg-gray-700 dark:text-base-100"
            >
              Sign Out
            </button>
          </>
        )}

        {!user && (
          <>
            <NavLink
              className="btn mr-3 bg-gradient-to-bl to-blue-500 from-purple-500 text-white"
              to="/auth"
            >
              Log In
            </NavLink>
            <NavLink
              className="btn mr-3 bg-gradient-to-bl to-blue-500 from-purple-500 text-white"
              to="/auth/signup"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
