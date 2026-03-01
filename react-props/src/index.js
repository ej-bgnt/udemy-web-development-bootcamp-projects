import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Card
      title="J. Cole"
      img="https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2020/02/J-Cole-WEB.jpg"
      tel="+63987654321"
      email="cole@world.com"
    />
    <Card
      title="Chance the Rapper"
      img="https://images.genius.com/9db1a9643a028d62543e44c90da3a6ad.1000x1000x1.jpg"
      tel="+63123456789"
      email="chance@rapper.com"
    />
    <Card
      title="Kanye West"
      img="https://acclaimmag.com/wp-content/uploads/2014/08/kanye-feature.jpg"
      tel="+6315798642"
      email="yee@eezy.com"
    />
  </>
);
