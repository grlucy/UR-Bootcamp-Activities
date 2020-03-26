import React from "react";

// We access the value stored in context using Consumer
function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor:
          props.theme === "dark"
            ? "dimgray"
            : props.theme === "green"
            ? "#5cb85c"
            : "white",
        textAlign: "center"
      }}
    >
      <div
        style={{
          color: props.theme === "dark" ? "white" : "black",
          textAlign: "center"
        }}
      >
        The theme is: {props.theme}
      </div>
    </div>
  );
}

export default Card;
