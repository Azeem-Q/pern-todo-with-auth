import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";

//components

import ListTodos from "./todolist/ListTodos";
import EditTodo from "./todolist/EditTodo";
import InputTodo from "./todolist/InputTodo";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [todosChange, setTodosChange] = useState(false);

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseData = await response.json();

      setAllTodos(parseData);
      setName(parseData[0].user_name);
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
    getProfile();
    setTodosChange(false);
  }, [todosChange]);
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
      <InputTodo setTodosChange={setTodosChange} />
      <ListTodos
        allTodos={allTodos}
        setTodosChange={setTodosChange}
      />
    </Fragment>
  );
};

export default Dashboard;
