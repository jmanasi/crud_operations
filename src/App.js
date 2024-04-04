import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;