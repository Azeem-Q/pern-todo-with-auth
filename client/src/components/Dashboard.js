import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getName = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();

      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.info("Logged out Successfully!");
  };

  useEffect(() => {
    getName();
  }, []);
  return (
    <Fragment>
      <h1>Dashboard {name}</h1>
      <button
        className="btn btn-primary"
        onClick={(e) => logout(e)}
      >
        Logout
      </button>
    </Fragment>
  );
};

export default Dashboard;
