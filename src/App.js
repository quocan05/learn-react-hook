import logo from "./logo.svg";
import "./App.scss";
import "./views/NavHeader.js";
import NavHeader from "./views/NavHeader.js";
import { useState } from "react";
function App() {
  let [name, setName] = useState("");
  let [temp, setTemp] = useState("");
  let obj = {
    name: "An",
    age: 21,
  };

  const handleOnclick = () => {
    setName(temp);
  };

  const handleChangeName = (event) => {
    setTemp(event.target.value);
    console.log(temp);
  };

  return (
    <div className="App">
      <NavHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <p>My name is {name}</p>
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
