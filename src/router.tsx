import React from "react";
import { createHashRouter } from "react-router-dom";

// pages
import Root from "./pages/Root.tsx";

export default function createIndexRouter() {
  return createHashRouter([
    { path: "/", element: <Root /> },
  ]);
}
