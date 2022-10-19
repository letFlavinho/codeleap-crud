import style from "./Posts.css";
import { Post } from "../components/Post";
import { ApiPost } from "../components/ApiPosts";
import { FiLogOut } from "react-icons/fi";
import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import Modal from "react-modal";
import { EditModal } from "../components/EditModal";
import { DeleteModal } from "../components/DeleteModal";

export function Posts() {
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  function openEditModal() {
    console.log("working");
    setEditIsOpen(true);
  }

  function closeEditModal() {
    setEditIsOpen(false);
  }

  function openDeleteModal() {
    console.log("working");
    setDeleteIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteIsOpen(false);
  }

  const baseURL = "https://dev.codeleap.co.uk/careers/?format=json";
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

  const loadPosts = async () => {
    axios
      .get(baseURL)
      .then((Response) => setPosts(Response.data.results))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    loadPosts();
  }, []);

  const createNewPost = async () => {
    axios
      .post(baseURL, newPost)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const editPost = async () => {
    axios.put();
  };

  const handleDate = () => {
    const dt = new Date().toISOString();
    setTime(dt);
  };
  const handleClick = (event) => {
    handleDate();
    createNewPost();
    loadPosts();
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
          if (post.username === location.state.username) {
            return (
              <Post
                openDeleteModal={openDeleteModal}
                openEditModal={openEditModal}
                className="Post"
                name={post.username}
                content={post.content}
                title={post.title}
                time={handleTime(post.created_datetime)}
              />
            );
          } else {
            return (
              <ApiPost
                name={post.username}
                content={post.content}
                title={post.title}
                time={handleTime(post.created_datetime)}
              />
            );
          }
        })}
        <Modal
          isOpen={editIsOpen}
          onRequestClose={closeEditModal}
          contentLabel="Example Modal"
          overLayClassName="modal-overlay"
          className="modal-content"
        >
          <EditModal close={closeEditModal} />
        </Modal>
        <Modal
          isOpen={deleteIsOpen}
          onRequestClose={closeDeleteModal}
          contentLabel="Example Modal"
          overLayClassName="modal-overlay"
          className="modal-content"
        >
          <DeleteModal cancel={closeDeleteModal} />
        </Modal>
      </section>
    </div>
  );
}
