import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;