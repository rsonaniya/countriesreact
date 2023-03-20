import React from "react";

export default function Scroll(props) {
  return (
    <div
      style={{
        height: "30rem",
        border: "2px solid black",
        overflowY: "scroll",
      }}
    >
      {props.children}
    </div>
  );
}
