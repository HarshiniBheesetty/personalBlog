import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Har Blog</h2>
      <div className="links">
        {/* <a href="/">Home</a>
        <a href="/create">New Blog</a> */}
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </div>
  );
}

export default Navbar;
