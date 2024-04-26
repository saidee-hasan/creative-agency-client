import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Admin from "../components/Admin/Admin/Admin";
import Dashboard from './../components/Admin/Dashboard/Dashboard';

import About from "../components/Home/About/About";
import Users from "../components/Admin/Users/Users";
import AddProduct from "../components/Admin/AddProduct/AddProduct";


export const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "*", element: "404 error" },
  { path: "/about", element: <About/> },


  
  { path: "/admin", element: <Admin/>},
  { path: "/dashboard", element: <Dashboard/>},
  { path: "/user", element: <Users/>},
  { path: "/addproduct", element: <AddProduct/>},
 




  





]);
