import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactuseState from "./Components/ReactuseState";
import ReactuseEffect from "./Components/ReactuseEffect";

function App() {
  return (
    <div className="App">
      <div></div>
      <div class="grid-container">
        <div class="item1">
          <h1>React Hooks</h1>
          <hr />
        </div>
        <div class="item2">Menu</div>
        <div class="item3">Main</div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReactuseState />} />
          <Route path="useEffect" element={<ReactuseEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
