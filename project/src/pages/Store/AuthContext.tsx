import React, { createContext, useState } from "react";

let AuthContext = createContext(0);

export default function AuthContextProvider(props: any) {
  let [token, setToken] = useState(0);
  return (
    <AuthContextProvider value={{ token, setToken }}>
      {props.children}
    </AuthContextProvider>
  );
}
