import React from "react";
import { createHashRouter } from "react-router-dom";

export default function createIndexRouter() {
  return createHashRouter([
    { path: "/", element: <div className="text-center p-5"><h1>This Page is Empty</h1></div> },
  ]);
}
