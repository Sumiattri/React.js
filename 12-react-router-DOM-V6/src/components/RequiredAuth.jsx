import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function RequiredAuth({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace={true} />; // this replace will save us from a infinite loop
  // if we are not logged in and we go to post, then we will be redirected to login page, if go back
  // on our web-page, then we will again go to posts from login page, but posts will again redirect to
  // the login page. This replace saves us from that and after going back from login page,it redirect us
  // to the page before posts page
}

export default RequiredAuth;
