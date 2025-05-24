import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default AuthLayout;
