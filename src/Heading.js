import React from "react";
import "./Heading.css";
import "./App.css";

export default function Heading(props) {
  return (
    <div className="heading">
      <h1>{props.defaultCity}</h1>
    </div>
  );
}
