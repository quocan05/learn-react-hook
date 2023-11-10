import logo from "./logo.svg";
import "./App.scss";
import "./views/NavHeader.js";
import NavHeader from "./views/NavHeader.js";

function App() {
  let name = "An";

  let obj = {
    name: "An",
    age: 21,
  };
  return (
    <div className="App">
      <NavHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <p>My name is {obj.name}</p>
        <p>My object: {JSON.stringify(obj)}</p>
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
