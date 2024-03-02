import React from "react";
import { createHashRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/fontawesome-free-solid";

export default function createIndexRouter() {
  return createHashRouter([
    { path: "/", element: <div className="text-center p-5"><h1>This Page is Empty <FontAwesomeIcon icon={faBan} /></h1></div> },
  ]);
}
