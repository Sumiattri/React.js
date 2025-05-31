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
import RequiredAuth from "./components/RequiredAuth";
import AuthProvider from "./context/AuthProvider";
import { loader as fetchPosts } from "./pages/Posts";
import { loader as fetchSinglePost } from "./pages/PostDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="posts"
        loader={fetchPosts}
        errorElement={<Error />}
        element={
          <RequiredAuth>
            <Posts />
          </RequiredAuth>
        }
      />
      // here RequiredAuth is acting as a route guard and Posts is the protected
      Route
      <Route
        path="posts/:id"
        loader={fetchSinglePost}
        element={
          <RequiredAuth>
            <PostDetails />
          </RequiredAuth>
        }
      />
      // this id is called route parameter and can be accessed // in PostDetails
      by using useParams()
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
