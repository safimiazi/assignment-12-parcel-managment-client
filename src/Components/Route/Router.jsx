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
import AdminStatistics from "../../Pages/AdminDash/AdminStatistics";
import AllDeliveryMen from "../../Pages/AdminDash/AllDeliveryMen";
import AllParcels from "../../Pages/AdminDash/AllParcels";
import AllUsers from "../../Pages/AdminDash/AllUsers";
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
        },
        //admin dashboard
        {
          path: '/dashboard/statistics',
          element: <AdminStatistics></AdminStatistics>
        },
        {
          path: '/dashboard/all-delivery-men',
          element: <AllDeliveryMen></AllDeliveryMen>
        },
        {
          path: '/dashboard/all-parcels',
          element: <AllParcels></AllParcels>
        },
        {
          path: '/dashboard/all-users',
          element: <AllUsers></AllUsers>
        },
      ]
    }
  ]);

  export default router;