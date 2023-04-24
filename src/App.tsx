import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

//custom import
import Route from "./routes/route";

const app = () => {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
};

export default app;
