import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../components/login";
import SignUp from "../components/SignUp";

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
