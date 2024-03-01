import React from "react";
import { createHashRouter } from "react-router-dom";

export default function createIndexRouter() {
  return createHashRouter([
    { path: "/", element: <>123</> },
  ]);
}
