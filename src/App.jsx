
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import { router } from "./Router/Routes";



const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
      <Layout> </Layout>
      </RouterProvider>
     
    </div>
  );
};

export default App;
