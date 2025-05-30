import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function RequiredAuth({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default RequiredAuth;
