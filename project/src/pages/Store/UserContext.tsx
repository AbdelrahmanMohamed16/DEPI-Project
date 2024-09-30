import { createContext, ReactNode, useContext, useState } from "react";

interface UserState {
  userData: {
    name: string;
    email: string;
    avatar: string;
  };
  setUserData: (name: string, email: string, avatar: string) => void;
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
  const [userData, setUserData] = useState<any>({
    name: "Guest",
    email: "Guest@gmail.com",
    avatar: "",
  });
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
