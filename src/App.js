import Search from "./Search";
import Heading from "./Heading";
import Temperature from "./Temperature";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card" style={{ width: "50rem" }}>
          <div className="card-body">
            <Search />
            <hr className="line-display" />
            <Heading defaultCity="Seattle" />
            <Temperature defaultCity="Seattle" />
            <hr className="line-display" />
          </div>
        </div>
        <span className="source-code">
          <a href="/">Open-source code </a>
          by Kayla Shovlowsky
        </span>
      </div>
    </div>
  );
}
