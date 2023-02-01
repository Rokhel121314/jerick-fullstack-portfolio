import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      {/* <Navigation /> */}
      <App />
    </BrowserRouter>
  </>
);
