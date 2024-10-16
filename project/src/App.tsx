import "./App.css";
import Home from "./pages/Home";
import React from "react";
import { SignUp } from "./pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { UserContextProvider, useUserContext } from "./pages/Store/UserContext";
import Overview from "./pages/Overview";
import ViewTasks from "./pages/ViewTasks";
import { TasksContextProvider } from "./pages/Store/TasksContext";
import Workspace from "./pages/Workspace";
import { NotFound } from "./pages/NotFound";

const App: React.FC = () => {
    const { userData } = useUserContext();


    const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        console.log(userData);
        return userData ? (
            <>{children}</>
        ) : userData === "loading" ? (
            <p>Loading....</p>
        ) : (
            <Navigate to={"/login"} />
        );
    };

    return (
        <UserContextProvider>
            <Routes>
                <Route
                    path="signUp"
                    element={userData ? <Navigate to={"/"} /> : <SignUp />}
                />
                <Route
                    path="login"
                    element={userData ? <Navigate to={"/"} /> : <Login />}
                />
                <Route path="createworkspace" element={<ProtectedRoute><Workspace /></ProtectedRoute>} />


                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}>
                    <Route
                        index
                        element={
                            <TasksContextProvider>
                                <Overview />
                            </TasksContextProvider>
                        }
                    />
                    <Route
                        path="overview"
                        element={
                            <TasksContextProvider>
                                <Overview />
                            </TasksContextProvider>
                        }
                    />
                    <Route
                        path="tasks"
                        element={
                            <TasksContextProvider>
                                <ViewTasks />
                            </TasksContextProvider>
                        }
                    />
                    <Route
                        path="settings"
                        element={
                            <TasksContextProvider>
                                <ViewTasks />
                            </TasksContextProvider>
                        }
                    />
                </Route>


                <Route
                    path="*"
                    element={<ProtectedRoute><NotFound /></ProtectedRoute>}
                />
            </Routes>
        </UserContextProvider>
    );
};

export default App;
