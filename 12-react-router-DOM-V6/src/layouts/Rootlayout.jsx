import { Outlet, Link } from "react-router-dom";
function Rootlayout() {
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <h1>Main Content</h1>
        <Outlet />
      </main>
    </div>
  );
}

export default Rootlayout;
