import { useAuth } from "../context/AuthProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const previousPath = searchParams.get("redirectTo") || "/";
  console.log(previousPath);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(previousPath, { replace: true }); // this replace will save us from logging out, if we press back after logging
    }
  }, [isLoggedIn]);

  function login() {
    setIsLoggedIn(true);
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login In</button>
    </div>
  );
}

export default Login;
