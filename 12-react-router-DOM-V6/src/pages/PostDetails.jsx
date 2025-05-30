import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function PostDetails() {
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState();
  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();
      setPost(data);
    }
    fetchPost();
  }, []);

  return (
    <div>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

export default PostDetails;
