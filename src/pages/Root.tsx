import React from "react";
import { faBan } from "@fortawesome/fontawesome-free-solid";
import FaIcon from "../util/FaIcon.tsx";

export default function Root() {
  return <div className="text-center p-5"><h1>This Page is Empty <FaIcon icon={faBan} /></h1></div>;
}
