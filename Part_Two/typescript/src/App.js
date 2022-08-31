import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
  );
};

export default App;
