import Search from "./Search";
import Heading from "./Heading";
import Temperature from "./Temperature";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card" style={{ width: "50rem" }}>
          <div className="card-body">
            <Search />
            <hr className="line-display" />
            <Heading />
            <Temperature />
            <Weather />
            <hr className="line-display" />
          </div>
        </div>
      </div>
    </div>
  );
}
