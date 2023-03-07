import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";

//components

import ListTodos from "./todolist/ListTodos";
import EditTodo from "./todolist/EditTodo";
import InputTodo from "./todolist/InputTodo";

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
      <div className="d-flex mt-5 justify-content-around">
        <h2>{name}'s Todo List</h2>
        <button
          className="btn btn-primary"
          onClick={(e) => logout(e)}
        >
          Logout
        </button>
      </div>
      <InputTodo />
      <ListTodos />
    </Fragment>
  );
};

export default Dashboard;
