import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../components/login";
import SignUp from "../components/SignUp";
import Home from "../pages/Home/Home";
import VendorDetailsCard from "../pages/VendorDetails/VendorDetailsCard";
import DashboardLayout from "../Layout/DashboardLayout";
import MenuDetails from "../pages/VendorDetails/MenuDetails";
import AllMenu from "../pages/AllMenu/AllMenu";
import MyMenu from "../pages/VendorDetails/MyMenu";
import AddMenu from "../pages/VendorDetails/AddMenu";
import EditMenu from "../pages/VendorDetails/EditMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    //errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"/allVendors",
        element:<AllMenu></AllMenu>
      },
      {
        path: "vendor/:id",
        element: <VendorDetailsCard />,
      },
      {
        path:"/myMenu",
        element:<MyMenu></MyMenu>
      },
      {
        path:"/addMenu",
        element:<AddMenu></AddMenu>
      },
      {
        path:"/editMenu",
        element:<EditMenu></EditMenu>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    //errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[

    ]
  }
]);
