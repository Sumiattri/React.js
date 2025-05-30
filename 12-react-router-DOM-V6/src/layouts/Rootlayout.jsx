import { Outlet, Link, NavLink } from "react-router-dom";
import styles from "./RootLayout.module.css";
function Rootlayout() {
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(obj) => {
                return obj.isActive ? styles.activeNav : null;
              }}
            >
              Home
            </NavLink>
            {/*  NavLink provides a default class active to whichever tag we
            click, which Link doesn't. We can also // set our own class manually
            like we did above */}
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => {
                return isActive ? styles.activeNav : null;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={(obj) => {
                return obj.isActive ? styles.activeNav : null;
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="posts"
              className={(obj) => {
                return obj.isActive ? styles.activeNav : null;
              }}
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Rootlayout;
