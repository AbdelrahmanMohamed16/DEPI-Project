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
import { Grid2 } from "@mui/material";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import { NotFound } from "./pages/NotFound";
import { TasksContextProvider } from "./pages/Store/TasksContext";
import Workspace from "./pages/Workspace";

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
        <Route path="createworkspace" element={<Workspace />} />
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
                <TasksContextProvider>
                  <Overview />
                </TasksContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="overview"
            element={
              <ProtectedRoute>
                <TasksContextProvider>
                  <Overview />
                </TasksContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="tasks"
            element={
              <ProtectedRoute>
                <TasksContextProvider>
                  <ViewTasks />
                </TasksContextProvider>
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
        <Route
          path="*"
          element={
            <ProtectedRoute>

                <NotFound />

            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
