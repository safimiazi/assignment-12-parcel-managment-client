import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import BookParcel from "../../Pages/UserDash/BookParcel";
import MyParcel from "../../Pages/UserDash/MyParcel";
import MyProfile from "../../Pages/UserDash/MyProfile";
import UserUpdate from "../../Pages/UserDash/UserUpdate";
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
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        //user route
        {
          path: "/dashboard/book-parcel",
          element: <BookParcel></BookParcel>
        },
        {
          path: "/dashboard/my-parcel",
          element:<MyParcel></MyParcel>
        },
        {
          path: "/dashboard/my-profile",
          element: <MyProfile></MyProfile>
        },
        {
          path: '/dashboard/update/:id',
          element: <UserUpdate></UserUpdate>
        }
      ]
    }
  ]);

  export default router;