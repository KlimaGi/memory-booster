import React, { useState } from "react";

const Login: React.FC = () => {
  return (
    <form>
      <input id="username" placeholder="Username" />
      <input id="email" placeholder="Email" />
      <input id="password" placeholder="Password" />
    </form>
  );
};

export default Login;
