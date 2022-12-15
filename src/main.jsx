import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Cadastro } from "./Cadastro";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Cadastro" element={<Cadastro />} />
       </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);
