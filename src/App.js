import logo from "./logo.svg";
import "./App.scss";
import "./views/NavHeader.js";
import NavHeader from "./views/NavHeader.js";
import { useState } from "react";
import Todos from "./views/Todo.js";
function App() {
  let [name, setName] = useState("");
  let [temp, setTemp] = useState("");

  let [todos, setTodos] = useState([
    { id: "1", title: "watch porn" },
    { id: "2", title: "learn react" },
    { id: "3", title: "do TOEIC test" },
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
  return (
    <div className="App">
      <NavHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <p>My name is {name}</p>

        <Todos value={todos} title={"all my todos"} />

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
        </a>
      </header>
    </div>
  );
}

export default App;
