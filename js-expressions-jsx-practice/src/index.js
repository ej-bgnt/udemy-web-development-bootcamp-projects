//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom/client";

const myName = "Norman";
const currentDate = new Date();
const year = currentDate.getFullYear();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Created by {myName}</h1>
    <p>Copyright {year}</p>
  </div>
);
