import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./adminpages/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    {/* </StrictMode> */}
  </>
);
