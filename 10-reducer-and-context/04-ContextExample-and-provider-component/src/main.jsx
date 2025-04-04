import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import { createContext } from "react";
import AuthProvider from "./AuthProvider.jsx";

// export const AuthContext = createContext();

createRoot(document.getElementById("root")).render(
  /* <AuthContext.Provider value={{ userName: "Sumit", password: "attri" }}>
      <App />
    </AuthContext.Provider> */
  <AuthProvider>
    <App />
  </AuthProvider>
);
