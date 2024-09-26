import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ViewTasks from "./pages/ViewTasks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/views" element={<ViewTasks />} />
      </Routes>
    </>
  );
}

export default App;
