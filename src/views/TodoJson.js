import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../custom/useFetch.js";
const TodoJson = () => {
  const {
    data: todos,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>completed</td>
        </tr>
      </thead>
      <tbody>
        {isError === false &&
          isLoading === false &&
          todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        {isLoading === true && (
          <tr>
            <td colSpan={3} style={{ textAlign: "center" }}>
              Loading....
            </td>
          </tr>
        )}

        {isError === true && (
          <tr>
            <td colSpan={3} style={{ textAlign: "center" }}>
              Error....
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TodoJson;
