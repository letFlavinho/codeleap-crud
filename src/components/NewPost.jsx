import style from "../components/NewPost.css";
import axios from "axios";
import { useState } from "react";

export function NewPost(props) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [time, setTime] = useState("");

  const addPost = (data) =>
    axios
      .post("https://dev.codeleap.co.uk/careers/?format=json", data)
      .then(() => {
        console.log("tudo certo");
      })
      .catch((err) => {
        console.error(err);
      });

  return (
    <div className="NewPost">
      <h3>What's on your mind?</h3>
      <label>Title</label>
      <input
        className="title"
        type="text"
        placeholder="Hello World"
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Content</label>
      <textarea
        className="content"
        type="text"
        placeholder="Content here"
        onChange={(event) => setContent(event.target.value)}
      />
      <div className="flex-end">
        <button onClick={(e) => setTime(Date())}>CREATE</button>
      </div>
    </div>
  );
}
