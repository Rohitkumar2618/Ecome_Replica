import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Details from "./Components/Details";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
};

export default App;
