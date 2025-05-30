import { Link } from "react-router-dom";
function Post({ id, title }) {
  return (
    <div style={{ padiing: "1rem", margin: "1rem", border: "2px solid black" }}>
      <Link to={id.toString()}>{title}</Link>
      <p>id:{id}</p>
    </div>
  );
}

export default Post;
