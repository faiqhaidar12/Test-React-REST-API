// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store"; // Ganti dengan path yang mengarah ke file store.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import Dashboard from "./Dashboard";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          {/* ...other routes */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
