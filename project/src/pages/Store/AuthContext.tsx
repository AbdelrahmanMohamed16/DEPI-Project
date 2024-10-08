import { createContext, ReactNode, useContext, useState } from "react";

interface AuthState {
  token: string;
  setToken: (token: string) => void;
}

export let AuthContext = createContext<AuthState | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AuthContextProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState<string>("");
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
