import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../components/login";
import SignUp from "../components/SignUp";
import Home from "../pages/Home/Home";
import VendorDetailsCard from "../pages/VendorDetails/VendorDetailsCard";

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
        path: "vendor/:id",
        element: <VendorDetailsCard />,
      },
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
]);
