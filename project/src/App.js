import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid px-lg-5 px-4">
        <div className="row ps-lg-5 mx-lg-5 px-4">
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
