import style from "./Posts.css";
import { NewPost } from "../components/NewPost";
import { Post } from "../components/Post";
import { FiLogOut } from "react-icons/fi";
import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../api/api";
import axios from "axios";

export function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dev.codeleap.co.uk/careers/?format=json")
      .then((Response) => setPosts(Response.data.results))
      .catch((error) => console.error(error));
  }, []);
  const location = useLocation();

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
        <NewPost />
        {posts.map((post, key) => {
          return (
            <Post
              className="Post"
              name={post.username}
              content={post.content}
              title={post.title}
            />
          );
        })}
      </section>
    </div>
  );
}
