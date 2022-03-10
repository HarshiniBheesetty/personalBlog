import React from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div className="blog-preview" key={index}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <h6>{blog.category}</h6>
            <h6>written by {blog.author}</h6>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
