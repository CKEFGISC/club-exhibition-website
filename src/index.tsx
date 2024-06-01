import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Add bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./index.scss";

import createIndexRouter from "./router.tsx";

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLDivElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={createIndexRouter()} />
  </React.StrictMode>
);
