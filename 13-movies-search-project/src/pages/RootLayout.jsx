import { Link, Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import styles from "../CSS/RootLayout.module.css";
import LoadingSpinner from "../assets/LoadingSpinner.svg";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <div>
      <nav className={`container ${styles.nav}`}>
        <Link to="/">
          <h1>Movie Search</h1>
        </Link>
      </nav>

      {navigation.state === "loading" ? (
        <img src={LoadingSpinner} alt="Loading..." className="loadingSpinner" />
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default RootLayout;
