import React, { Fragment, useState } from "react";

const Login = ({ setAuth }) => {
  return (
    <Fragment>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-control"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control"
        />
      </form>
    </Fragment>
  );
};

export default Login;
