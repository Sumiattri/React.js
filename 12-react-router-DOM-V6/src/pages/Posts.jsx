import { use, useEffect, useState } from "react";
import Post from "../components/Post";
const endpoint = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [err, setErr] = useState("");
  useEffect(() => {
    setIsLoading(true);
    async function fetchPosts() {
      try {
        const res = await fetch(endpoint);
        console.log(res);

        if (!res.ok) {
          console.log("inside if");

          setIsError(true);
          setIsLoading(false);
          throw new Error(`${res.status} Error`);
        }
        const data = await res.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.log("inside catch");

        setErr(error.message);
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchPosts();
  }, []);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <p>{err}</p>;
  }
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
