import { Link, Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
function RootLayout() {
  const navigation = useNavigation();
  return (
    <div>
      <nav>
        <Link to="/"> Movies Search</Link>
        {navigation.state === "loading" ? <h1>Loading...</h1> : <Outlet />}
      </nav>
    </div>
  );
}

export default RootLayout;
