import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import { Link } from "react-router-dom";
import Create from "./Components/Create";

const App = () => {
  // getting seach and pathname of current page
  const { search, pathname } = useLocation();
  console.log(search, pathname);

  return (
    <div className="w-screen h-screen flex">
      {/* Logic to display the Home button */}

      {(pathname !== "/" || search.length > 0) && (
        <Link to="/" className="absolute left-[17%] top-[3%] text-red-300">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
