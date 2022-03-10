import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

function Create() {
  const [title, setTile] = useState("");
  const [body, setBody] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Sports");
  const [author, setAuthor] = useState("Harshini");
  const [isPending, setIspending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author, category };
    console.log(blog);

    setIspending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIspending(false);
      //history.go(1);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTile(e.target.value);
          }}
        />
        {/* <label>Content:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        /> */}
        <label>Content Editor:</label>
        <CKEditor
          className="editor"
          editor={ClassicEditor}
          data={body}
          onChange={(e, editor) => {
            const data = editor.getData();
            const parsedData = data;
            setBody(parsedData);
          }}></CKEditor>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
          {/* <option value="Technology">Technology</option> */}
        </select>
        <label>Author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}>
          <option value="Harshini">Harshini</option>
          <option value="Harshini Bheesetty">Harshini Bheesetty</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
      {parse(text)}
    </div>
  );
}

export default Create;
