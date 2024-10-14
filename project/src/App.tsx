import "./App.css";
import Home from "./pages/Home";
import React from "react";
import { SignUp } from "./pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import "./App.css";
import { UserContextProvider, useUserContext } from "./pages/Store/UserContext";
import Overview from "./pages/Overview";
import ViewTasks from "./pages/ViewTasks";

const App: React.FC = () => {
  const { userData } = useUserContext();
  function ProtectedRoute({ children }: any) {
    console.log(userData);
    return userData ? (
      children
    ) : userData === "loading" ? (
      <p>Loading....</p>
    ) : (
      <Navigate to={"/login"} />
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="signUp"
          element={userData ? <Navigate to={"/"} /> : <SignUp />}
        />
        <Route
          path="login"
          element={userData ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <UserContextProvider>
                <Home />
              </UserContextProvider>
            </ProtectedRoute>
          }
        >
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Overview />
              </ProtectedRoute>
            }
          />
          <Route
            path="overview"
            element={
              <ProtectedRoute>
                <Overview />
              </ProtectedRoute>
            }
          />
          <Route
            path="tasks"
            element={
              <ProtectedRoute>
                <ViewTasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <ViewTasks />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
