import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <nav>
        <Link to="/"> Movies Search</Link>
        <Outlet />
      </nav>
    </div>
  );
}

export default RootLayout;
