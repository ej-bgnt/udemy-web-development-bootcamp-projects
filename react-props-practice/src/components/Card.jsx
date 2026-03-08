import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 class="title">{props.title}</h2>
        <img class="circle-img" src={props.imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p class="info">{props.phone}</p>
        <p class="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
