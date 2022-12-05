import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { DataProvider } from "./Context/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    {/* <DataProvider> */}
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
    {/* </DataProvider> */}
  </BrowserRouter>

);


