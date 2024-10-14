import "./App.css";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import { SignUp } from "./pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { jwtDecode, JwtPayload } from "jwt-decode"; // Use named import
import "./App.css";
import { UserContextProvider } from "./pages/Store/UserContext";
import Overview from "./pages/Overview";
import { useAuthContext } from "./pages/Store/AuthContext";
import ViewTasks from "./pages/ViewTasks";
import { Grid2 } from "@mui/material";
import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import {NotFound} from "./pages/NotFound";

interface UserData extends JwtPayload {
  // Add any properties expected in your JWT payload
}

const App: React.FC = () => {
  const { token } = useAuthContext();
  const [userData, setUserData] = useState<UserData | null>(null);
  const saveUserData = () => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const decode = jwtDecode<UserData>(token);
        setUserData(decode);
      } catch (error) {
        console.error("Invalid token", error);
        setUserData(null);
      }
    } else {
      setUserData(null);
    }
  };

  useEffect(() => {
    saveUserData();
  }, []);

  function ProtectedRoute({ children }: any) {
    return true ? children : <Navigate to={"/login"} />;
  }

  return (
    <>

      {true ? (
        <Grid2 container sx={{ width: "100%", background: "#F6F8FD" }}>
          <LeftSidebar />
          <Grid2 size={{ xs: 11, md: 7.6 }} offset={{ xs: 1, md: 2.2 }} mt={3}>
            <Navbar />
            <Routes>
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <UserContextProvider>
                      <Overview />
                    </UserContextProvider>
                  </ProtectedRoute>
                }
              />
              <Route path='*' element={<ProtectedRoute>
                <UserContextProvider>
                  <NotFound />
                </UserContextProvider>
              </ProtectedRoute>} />


              <Route path="signUp" element={
                <ProtectedRoute>
                  <UserContextProvider>
                    <SignUp />
                  </UserContextProvider>
                </ProtectedRoute>
              } />
              <Route path="login" element={
                <ProtectedRoute>
                  <UserContextProvider>
                    <Login saveUserData={saveUserData}/>
                  </UserContextProvider>
                </ProtectedRoute>
                } />
              <Route
                path="overview"
                element={
                  <ProtectedRoute>
                    <UserContextProvider>
                      <Overview />
                    </UserContextProvider>
                  </ProtectedRoute>
                }
              />
              <Route
                path="tasks"
                element={
                  <ProtectedRoute>
                    <UserContextProvider>
                      <ViewTasks />
                    </UserContextProvider>
                  </ProtectedRoute>
                }
              />
              <Route
                path="settings"
                element={
                  <ProtectedRoute>
                    <UserContextProvider>
                      <ViewTasks />
                    </UserContextProvider>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Grid2>
          <RightSidebar userData={userData} />
        </Grid2>
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
