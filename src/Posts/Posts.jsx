import style from "./Posts.css";
import { NewPost } from "../components/NewPost";
import { Post } from "../components/Post";
import { FiLogOut } from "react-icons/fi";
import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

export function Posts() {
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
        <Post className="Post" name={location.state.username} />
        <Post className="Post" />
        <Post className="Post" />
        <Post className="Post" />
      </section>
    </div>
  );
}
