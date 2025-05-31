import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  function login() {
    setIsLoggedIn(true);
    navigate("/", { replace: true }); // this replace will save us from logging out, if we press back after logging
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login In</button>
    </div>
  );
}

export default Login;
