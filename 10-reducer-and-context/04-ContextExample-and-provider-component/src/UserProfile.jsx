import BasicDetail from "./BasicDetail";

import { useAuth } from "./AuthProvider";

function UserProfile() {
  const handleLogin = () => {
    setAuth({ userName: "Sumit", password: "attri" });
  };
  const { auth, setAuth } = useAuth();
  return (
    <div>
      <h1>User Profile</h1>
      <hr />
      <hr />
      {auth.userName ? (
        <BasicDetail />
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default UserProfile;
