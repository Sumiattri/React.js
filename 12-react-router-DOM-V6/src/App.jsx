import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, Contact, About, Error, Posts, PostDetails } from "./pages";

// react automatically looks for index.js file (barrel file) in pages folder and tries
// to import these component from there, if they have been exported from there

import Rootlayout from "./layouts/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:id" element={<PostDetails />} /> // this id is called
      route parameter and can be accessed // in PostDetails by using useParams()
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
