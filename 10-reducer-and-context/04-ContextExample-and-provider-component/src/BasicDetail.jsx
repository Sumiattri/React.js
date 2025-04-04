import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
import { useAuth } from "./AuthProvider"; // importing directly the function inspite of importing useContext and AuthContext

function BasicDetail() {
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
  };

  return (
    <>
      <h2> Name : {auth.userName}</h2>
      <h2>Password : {auth.password}</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default BasicDetail;
