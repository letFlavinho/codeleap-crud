import style from "./Posts.css";
import { Post } from "../components/Post";
import { ApiPost } from "../components/ApiPosts";
import { FiLogOut } from "react-icons/fi";
import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";

export function Posts() {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [posts, setPosts] = useState([]);
  const newPost = {
    title: title,
    content: content,
    username: location.state.username,
    created_datetime: time,
  };
  const handleTime = (date) => {
    const result = formatDistanceToNow(
      new Date(date),
      { addSuffix: true },
      { includeSeconds: true }
    );
    return result;
  };
  useEffect(() => {
    axios
      .get("https://dev.codeleap.co.uk/careers/?format=json")
      .then((Response) => setPosts(Response.data.results))
      .catch((error) => console.error(error));
  }, []);

  const createNewPost = async () => {
    axios
      .post("https://dev.codeleap.co.uk/careers/?format=api", newPost)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleDate = () => {
    const dt = new Date().toISOString();
    setTime(dt);
  };
  const handleClick = (event) => {
    handleDate();
    createNewPost();
  };
  return (
    <div className="Posts">
      <header>
        <h3>CodeLeap Network</h3>
        <span>{location.state.username}</span>
        <Link to={`/`}>
          <FiLogOut className="logoutbtn" />
        </Link>
      </header>
      <section>
        <div className="NewPost">
          <h3>What's on your mind?</h3>
          <label>Title</label>
          <input
            className="title"
            type="text"
            placeholder="Hello World"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label>Content</label>
          <textarea
            className="content"
            type="text"
            placeholder="Content here"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <div className="flex-end">
            <button onClick={handleClick}>CREATE</button>
          </div>
        </div>

        {posts.map((post, key) => {
          return (
            <Post
              className="Post"
              name={post.username}
              content={post.content}
              title={post.title}
              time={handleTime(post.created_datetime)}
            />
          );
        })}
      </section>
    </div>
  );
}
