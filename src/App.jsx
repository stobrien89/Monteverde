import React from "react";
import "./App.css";

import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
