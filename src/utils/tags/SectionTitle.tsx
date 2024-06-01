import React from "react";
import "./SectionTitle.scss";

export default function SectionTitle(props: Record<string, any>) {
  return <div className="section-title">
    <h3>
      {props.children}
    </h3>
  </div>;
}
