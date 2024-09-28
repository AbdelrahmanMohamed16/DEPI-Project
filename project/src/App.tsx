
import "./App.css";
import ViewTasks from "./pages/ViewTasks";
import React, { useEffect, useState } from 'react';
import { SignUp } from './pages/SignUp';
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { jwtDecode, JwtPayload } from "jwt-decode"; // Use named import
import './App.css';

interface UserData extends JwtPayload {
    // Add any properties expected in your JWT payload
}

const App: React.FC = () => {
    const [userData, setUserData] = useState<UserData | null>(null);

    const saveUserData = () => {
        const token = localStorage.getItem('Token');
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

    return (
        <div>
            <Routes>
                <Route path="signUp" element={<SignUp />} />
                <Route path="login" element={<Login saveUserData={saveUserData} />} />
                <Route path="/views" element={<ViewTasks />} />
            </Routes>
        </div>
    );
}

export default App;

