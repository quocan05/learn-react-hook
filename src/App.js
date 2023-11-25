import logo from "./logo.svg";
import "./App.scss";
import "./views/NavHeader.js";
import NavHeader from "./views/NavHeader.js";
import { useState, useEffect } from "react";
import Todos from "./views/Todo.js";
import DetailCar from "./views/DetailCar.js";
import TodoJson from "./views/TodoJson.js";
import Countdown from "./views/Countdown.js";
import Clock from "./views/Clock.js";
import { Posts } from "./views/Posts.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Outlet,
  Routes,
} from "react-router-dom";
import { GayCheck } from "./views/GayCheck.js";
import { DetailPost } from "./views/DetailPost.js";
import { AddPost } from "./views/AddPost.js";

function App() {
  let [name, setName] = useState("");
  let [temp, setTemp] = useState("");

  let [todos, setTodos] = useState([
    { id: "1", title: "watch porn", auth: "An" },
    { id: "2", title: "learn react", auth: "An" },
    { id: "3", title: "do TOEIC test", auth: "An" },
    { id: "4", title: "speaking", auth: "nA" },
    { id: "5", title: "sleep", auth: "nA" },
    { id: "6", title: "wake up", auth: "nA" },
    { id: "7", title: "study", auth: "An" },
    { id: "8", title: "go academy", auth: "nA" },
  ]);

  const handleOnclick = () => {
    if (!temp) {
      console.log("temp value: ", temp);
      alert("empty input");
      return;
    }
    let newTodo = { id: generateRandomString(2), title: temp };
    setTodos([...todos, newTodo]);
    setTemp("");
  };

  const alertGay = () => {
    alert("too late , you are geyy");
  };

  useEffect(() => {
    console.log("call useEffect.");
  }, [todos]);

  const handleChangeName = (event) => {
    setTemp(event.target.value);
    console.log(temp);
  };

  let generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  const deleteTodo = (id) => {
    let currentTodo;
    currentTodo = todos.filter((item) => item.id !== id);
    setTodos(currentTodo);
  };
  return (
    <div className="App">
      <NavHeader />
      <div>Xin chao to ten la Quoc An</div>
      <Routes>
        <Route path="clock" element={<Clock />}></Route>
        <Route
          path="detail"
          element={
            <DetailCar
              car={{
                name: "Nissan GTR Skyline",
                brand: "Nissan",
                imageId: "DbbBaNX",
                altNameImage: "Image of Nissan GTR Skyline",
                type: "Sport Car",
                generation: [
                  "1969-1972",
                  "1972-1973",
                  "1989–1994",
                  "1995–1998",
                  "1999–2002",
                ],
              }}
            />
          }
        ></Route>
        <Route path="todo" element={<TodoJson />}></Route>
        <Route path="gay" element={<GayCheck />}></Route>
        <Route path="posts" element={<Posts />}></Route>
        <Route path="posts/:id" element={<DetailPost />} />
        <Route path="posts/add-new-post" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
