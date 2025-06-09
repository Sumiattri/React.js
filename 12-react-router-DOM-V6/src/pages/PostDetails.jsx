import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function PostDetails() {
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    setIsLoading(true);
    async function fetchPost() {
      try {
        const res = await fetch(`${url}/${id}`);

        if (!res.ok) {
          console.log("inside if");

          setIsError(true);
          setIsLoading(false);
          throw new Error(`${res.status} Error`);
        }
        const data = await res.json();

        setPost(data);
        setIsLoading(false);
      } catch (error) {
        console.log("inside catch");
        console.log(error);

        setErr(error.message);
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchPost();
  }, []);

  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <p>{err}</p>;
  }

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
