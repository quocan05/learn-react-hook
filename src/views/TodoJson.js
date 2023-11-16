import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoJson = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      setTimeout(async () => {
        try {
          let response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
          );
          console.log(">>check response: ", response);
          let data = response.data && response ? response.data : [];
          let filteredResponse = data.filter(
            (todo) => todo.completed === false
          );
          setTodos(filteredResponse);
          setIsLoading(false);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.length > 0 &&
            isLoading === false &&
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          {isLoading === true && (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoJson;
