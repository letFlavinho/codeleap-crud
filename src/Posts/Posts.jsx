import style from "./Posts.css";
import { Post } from "../components/Post";
import { ApiPost } from "../components/ApiPosts";
import { FiLogOut } from "react-icons/fi";
import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../api/api";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import { useForm } from "react-hook-form";

export function Posts() {
  const [time, setTime] = useState(new Date());
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dev.codeleap.co.uk/careers/?format=json")
      .then((Response) => setPosts(Response.data.results))
      .catch((error) => console.error(error));
  }, []);
  const location = useLocation();
  const handleTime = (date) => {
    const result = formatDistanceToNow(
      new Date(date),
      { addSuffix: true },
      { includeSeconds: true }
    );
    return result;
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
            <button>CREATE</button>
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
