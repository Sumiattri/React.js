import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  Contact,
  About,
  Error,
  Posts,
  PostDetails,
  Login,
} from "./pages";

// react automatically looks for index.js file (barrel file) in pages folder and tries
// to import these component from there, if they have been exported from there

import Rootlayout from "./layouts/Rootlayout";

import { loader as fetchPosts } from "./pages/Posts";
import { loader as fetchSinglePost } from "./pages/PostDetails";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { isLoggedIn } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        you
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="posts"
          loader={(args) => fetchPosts(args, { isLoggedIn: isLoggedIn })} // args is the parameter object that React Router automatically provides to every loader function. having two properties request and params
          errorElement={<Error />}
          element={<Posts />} // no need for RequiredAuth anymore, as we will check loggedIn status while fetching data in Posts
        />
        <Route
          path="posts/:id" // this id is called route parameter and can be accessed in PostDetails by using useParams()
          loader={(args) => fetchSinglePost(args, { isLoggedIn: isLoggedIn })}
          element={<PostDetails />}
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
