import { useLoaderData, redirect } from "react-router-dom";

export async function loader(xyz, { isLoggedIn }) {
  // console.log(xyz);
  const { params } = xyz;
  const { id } = params;
  // react-router-dom will pass a object to the loader function , having a params or parameter object, which
  // will have the id we use, thus wwe can get id(route paramter) without use of useParams()
  const url = "https://jsonplaceholder.typicode.com/posts";
  if (!isLoggedIn) {
    return redirect("/login");
  }
  const res = await fetch(`${url}/${id}`);
  const data = await res.json();
  return data;
}

function PostDetails() {
  const post = useLoaderData();
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
