//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom/client";

const currentDate = new Date(); //2026, 1, 1, 20
const time = currentDate.getHours();

// console.log(time);

var customStyling = {
  color: "",
};

var message = "";

if (time < 12) {
  customStyling.color = "red";
  message = "Good morning mate";
} else if (time === 12) {
  customStyling.color = "orange";
  message = "Good noon sir";
} else if (time > 12 && time < 18) {
  customStyling.color = "green";
  message = "Good afternoon brother";
} else {
  customStyling.color = "blue";
  message = "Good evening master";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading" style={customStyling}>
      {message}
    </h1>
  </div>
);
