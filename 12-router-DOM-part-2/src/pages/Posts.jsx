import Post from "../components/Post";
import { useLoaderData, redirect } from "react-router-dom";

// inspite  of  using useEffect to fetch data after our compoent mount, we'll here use loader which is latest react-router-dom feature
//loader
// 1).provide loader function to the route
// 2). useLoaderData() and get data

// loaders also do automatic error handling
// and loading state can be handled by useNavigation component in RootLayout component

export async function loader(args, { isLoggedIn }) {
  console.log(args);

  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  const request = args.request; // // the request object (like URL, headers, etc.)
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (!isLoggedIn) {
    return redirect(`/login?redirectTo=${pathname}`); // thing after login are called search params and can be accesed in login using useSearchParms();
  }
  // since loaders fetches the data before the component mounts, so RequiredAuth component will not work here in Loaders,
  // cause network request will already be sent to fetch data, even before the RequiredAuth mounts and checks for isLoggedIn
  // and anyone can see that network request in network tab in browser, so to avoid it, we put this if condition above by passing the
  // isLogged state in the callback of loader function and accepting it here
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
}

function Posts() {
  const posts = useLoaderData();

  return (
    <>
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} id={post.id} title={post.title} />;
        })}
    </>
  );
}

export default Posts;
