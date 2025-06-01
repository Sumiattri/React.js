import Post from "../components/Post";
import { useLoaderData, redirect } from "react-router-dom";

// inspite  of  using useEffect to fetch data after our compoent mount, we'll here use loader which is latest react-router-dom feature
//loader
// 1).provide loader function to the route
// 2). useLoaderData() and get data

export async function loader(args, { isLoggedIn }) {
  const endpoint = "https://jsonplaceholder.typicode.com/posts";

  if (!isLoggedIn) {
    return redirect("/login");
  }
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
