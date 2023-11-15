import logo from "./logo.svg";
import "./App.scss";
import "./views/NavHeader.js";
import NavHeader from "./views/NavHeader.js";
import { useState, useEffect } from "react";
import Todos from "./views/Todo.js";
import DetailCar from "./views/DetailCar.js";
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        {/* <p>My name is {name}</p> */}

        {/* <Todos value={todos} title={"all todos"} delete={deleteTodo} />

        <Todos
          value={todos.filter((item) => item.auth === "An")}
          title={"An's todos"}
          delete={deleteTodo}
        />
        <input
          type="text"
          value={temp}
          onChange={(event) => {
            handleChangeName(event);
          }}
        ></input>
        <button
          className="bt-clickme"
          onClick={() => {
            handleOnclick();
          }}
        >
          Click me
        </button>
        <a
          className="App-link"
          href="https://www.facebook.com/quoc.aan05/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mah Facebook
        </a> */}

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
        <DetailCar
          car={{
            name: "Koenigsegg Jesko",
            brand: "Koenigsegg",
            imageId: "VRJN7gf",
            altNameImage: "Image of Koenigsegg Jesko",
            type: "Super Sport Car",
            generation: [
              "1969-1972",
              "1972-1973",
              "1989–1994",
              "1995–1998",
              "1999–2002",
            ],
          }}
        />
      </header>
    </div>
  );
}

export default App;
