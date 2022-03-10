import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();

  const { data: blog, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <h6>{blog.body}</h6>
          <button onClick={handleClick}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
