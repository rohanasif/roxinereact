import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/features" Component={Home}></Route>
        <Route path="/portfolio" Component={Home}></Route>
        <Route path="/elements" Component={Home}></Route>
        <Route path="/about" Component={Home}></Route>
        <Route path="/team" Component={Home}></Route>
        <Route path="/blog" Component={Home}></Route>
      </Routes>
    </>
  );
}

export default App;
