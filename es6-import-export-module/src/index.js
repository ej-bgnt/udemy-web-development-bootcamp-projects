import React from "react";
import ReactDOM from "react-dom/client";
import pi, { doublePi, triplePi } from "./math";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>Import/Export</h1>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  </>
);
