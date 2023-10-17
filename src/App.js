import React from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/App-shell/Loader/loader";

function App() {
  return (
    <div className="App">
      <Loader />
      <AppRoutes />
      <ToastContainer autoClose={2000} position="top-right" />
    </div>
  );
}

export default App;
