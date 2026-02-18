import React from "react";
import ReactDOM from "react-dom/client";

const randomPic = "https://picsum.photos/300/200";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div className="container">
      <img className="food-img" src={randomPic + "?grayscale&blur"} alt="" />
      <img
        className="food-img"
        src="https://images.food52.com/aZ1xqntpYVztcU58Ucv-J9wXU4w=/7282b47e-bc72-4268-a69e-ef9bea123154--sisig-1.jpg?w=3840&q=75"
        alt=""
      />
      <img
        className="food-img"
        src="https://panlasangpinoy.com/wp-content/uploads/2021/07/Ginisang-Munggo-750x750.jpg"
        alt=""
      />
      <img
        className="food-img"
        src="https://i.pinimg.com/736x/d2/fa/a5/d2faa54c0748cce6e0cd4635ec5b8cf9.jpg"
        alt=""
      />
    </div>
  </div>
);
