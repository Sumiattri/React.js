import { useEffect, useState } from "react";
import Post from "../components/Post";
const endpoint = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(endpoint);
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
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
