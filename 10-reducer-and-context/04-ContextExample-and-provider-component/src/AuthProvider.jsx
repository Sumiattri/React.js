import React from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// so that our child components don't have to import useContext and AuthContext every time they uses value of the context, we are
// importing useContext here only and then
// we are making and exporting a function which will return output of useContext(AuthContext) which will be ultimately the value of
// of the context which we can use in any child comeponent by importing this function and then calling it.

export default AuthProvider;
