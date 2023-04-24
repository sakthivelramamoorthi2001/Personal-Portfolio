//packages
import React, { Profiler } from "react";
import { useRoutes } from "react-router";

//custom import
import Home from "../pages/Home.js";
import Main from "../pages/Main.js";
import About from "../pages/about.js";
import Profile from "../pages/profile.js";

//main function
const app = () => {
  const route = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Profile />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ];
  return useRoutes(route);
};
export default app;
