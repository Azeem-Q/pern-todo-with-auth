import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container-fluid text-sm-center p-5 bg-dark-subtle mt-5">
      <h1>Welcome to Todo City</h1>
      <p>Sign In and start building your todo list</p>
      <Link
        to="/login"
        className="btn btn-primary"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="btn btn-primary ms-3"
      >
        Register
      </Link>
    </div>
  );
};

export default Landing;
