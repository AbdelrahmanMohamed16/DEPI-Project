import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

interface UserState {
  userData: {
    id: string;
    username: string;
    email: string;
    avatar: string;
  };
  setUserData: (
    id: string,
    username: string,
    email: string,
    avatar: string
  ) => void;
}

export let userContext = createContext<UserState | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useAppContext must be used within an UserContextProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserProviderProps> = ({
  children,
}) => {
  const [userData, setUserData] = useState<any>(null);
  const { token } = useAuthContext();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { id } = await jwtDecode<any>(token); // Decode the token and get the ID
        const response = await axios.get(
          `http://localhost:9000/api/user?id=${id}`
        );
        const { username, email } = response.data; // Destructure the response data

        setUserData({ id, username, email }); // Set the user data in state
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null); // Reset user data if there is an error
      }
    };

    if (token) {
      fetchUserData(); // Call the async function
    }
  }, [token]);

  return (
    <userContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
