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
import MyOrders from "../components/MyOrders";
import Orders from "../pages/VendorDetails/Orders";
import PrivateRoute from "./PrivateRoute";

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
        element:<PrivateRoute><VendorDetailsCard /></PrivateRoute> ,
      },
      {
        path:"/myMenu",
        element:<PrivateRoute><MyMenu></MyMenu></PrivateRoute>  
      },
      {
        path:"/addMenu",
        element:<PrivateRoute><AddMenu></AddMenu></PrivateRoute>  
      },
      {
        path:"/editMenu",
        element:<PrivateRoute><EditMenu></EditMenu></PrivateRoute>  
      },
      {
        path:"/myOrders",
        element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>  
      },
      {
        path:"/orders",
        element:  <PrivateRoute><Orders></Orders></PrivateRoute>  
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
