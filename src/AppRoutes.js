import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.js";
import AppShell from "./components/App-shell/app-shell.js";

const AppRoutes = () => (
  <Router>
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AppShell>
  </Router>
);

export default AppRoutes;
