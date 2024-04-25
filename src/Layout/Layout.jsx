import { Outlet } from "react-router";
import Home from "./../components/Home/Home/Home";
import Navbar from "../components/Share/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Home></Home>

      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
