import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.img} alt="" width="200px" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
