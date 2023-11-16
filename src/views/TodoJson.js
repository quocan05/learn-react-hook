import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoJson = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        //console.log(response.data);
        let data = response && response.data ? response.data : [];
        let filteredData = data.filter((item) => item.id < 20);
        setIsLoading(false);
        setTodos(filteredData);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData();
  }, []);
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
