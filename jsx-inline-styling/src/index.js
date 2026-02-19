import React from "react";
import ReactDOM from "react-dom/client";

const customStyle = {
  color: "crimson",
  fontSize: "4rem",
  border: "1px solid black",
};

customStyle.color = "green";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
  </div>
);
