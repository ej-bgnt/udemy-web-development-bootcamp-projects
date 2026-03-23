import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input type="text" place="Username" />
      <Input type="password" place="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
