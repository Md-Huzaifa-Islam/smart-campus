import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="pt-24 min-h-[calc(100vh-68px)] gap-10">
        <Navbar />
        <Outlet />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default AuthLayout;
