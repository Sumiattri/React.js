import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, Error, RootLayout, SingleMovieDetail } from "./pages";
import { loader as MoviesLoader } from "./pages/Home";
import { loader as SingleMovieLoader } from "./pages/SingleMovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index loader={MoviesLoader} element={<Home />} />
      <Route
        path="/detail/:id"
        element={<SingleMovieDetail />}
        loader={SingleMovieLoader}
      />
      <Route />
      <Route />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
