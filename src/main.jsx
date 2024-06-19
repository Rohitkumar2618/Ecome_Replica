import React from "react";
import ReactDOM from "react-dom/client"; // Import client from 'react-dom'

import App from "./App";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
