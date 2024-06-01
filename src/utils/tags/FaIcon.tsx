import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-free-solid";

export default function FaIcon(props: { icon: string | IconDefinition }) {
  return <FontAwesomeIcon icon={props.icon as any} />;
}
