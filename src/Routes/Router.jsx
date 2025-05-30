import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        index: true,
        Component: About,
      },
    ],
  },
]);

export default router;
