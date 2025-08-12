import App from "@/App";
import DashBoardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Bookings from "@/pages/User/Bookings";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: DashBoardLayout,
    path: "/admin",
    children: [
      {
        Component: Analytics,
        path: "/admin/analytics",
      },
      {
        Component: AddTour,
        path: "/admin/add-tour",
      },
      {
        Component: AddTour,
        path: "/admin/add-tour-type",
      },
    ],
  },
  {
    Component: DashBoardLayout,
    path: "/user",
    children: [
      {
        Component: Bookings,
        path: "/user/bookings",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);

export default router;
