import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Filter from "./Filter";
import { useState, useEffect } from "react";

function Home() {
  //use effect fires on every render
  //empty array dependency make sure that use effect doesn't every time the state updates.
  //that array is a second parameter which determines when to run that function

  let { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  const filterHandle = (e) => {
    console.log(e.target.value);
    console.log(data);
    if (blogs && e.target.value === "All") {
      setBlogs(data);
    } else if (blogs && e.target.value === "Entertainment") {
      const entertainmentFilter = data.filter(
        (blog) => blog.category === "Entertainment"
      );
      setBlogs(entertainmentFilter);
      console.log(blogs);
    } else if (blogs && e.target.value === "Technology") {
      const techFilter = data.filter((blog) => blog.category === "Technology");
      setBlogs(techFilter);
      console.log(blogs);
    } else if (blogs && e.target.value === "Sports") {
      const sportsFilter = data.filter((blog) => blog.category === "Sports");
      setBlogs(sportsFilter);
      console.log(blogs);
    }
  };
  return (
    <div className="home">
      <Filter filterHandle={filterHandle}></Filter>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
