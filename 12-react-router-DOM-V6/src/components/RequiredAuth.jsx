import { Navigate } from "react-router-dom";

function RequiredAuth({ children }) {
  const isLoggedin = true;
  if (isLoggedin) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default RequiredAuth;
