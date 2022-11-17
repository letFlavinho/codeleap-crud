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
  const baseURL = "http://dev.codeleap.co.uk/careers/";
  const location = useLocation();
  const [editId, setEditId] = useState();
  const [deleteId, setDeleteId] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [posts, setPosts] = useState([]);
  const [editTitle, setEditTitle] = useState();
  const [editContent, setEditContent] = useState();
  const editPost = {
    title: editTitle,
    content: editContent,
  };
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
      .then(loadPosts)
      .catch(function (error) {
        alert("Erro ao postar! Tente de novo.");
      });
  };

  const confirmDeleteModal = () => {
    axios
      .delete(`${baseURL}${deleteId}/`)
      .then(function (response) {
        setDeleteId();
        loadPosts();
      })
      .catch(function (error) {
        alert("erro ao deletar post");
      });
  };
  const confirmEditModal = async () => {
    axios
      .patch(`${baseURL}${editId}/`, editPost)
      .then(function (response) {
        setEditId();
        loadPosts();
      })
      .catch(function (error) {
        alert("Erro ao editar!! Tente novamente");
      });
    // console.log(editTitle, editContent);
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

        {posts.map((post) => {
          if (post.username === location.state.username) {
            return (
              <Post
                key={post.id}
                openDeleteModal={() => setDeleteId(post.id)}
                openEditModal={() => setEditId(post.id)}
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
                key={post.id}
                name={post.username}
                content={post.content}
                title={post.title}
                time={handleTime(post.created_datetime)}
              />
            );
          }
        })}
        <Modal
          isOpen={!!editId}
          onRequestClose={() => setEditId()}
          contentLabel="Example Modal"
          overLayClassName="modal-overlay"
          className="modal-content"
        >
          <EditModal
            save={confirmEditModal}
            close={() => setEditId()}
            title={(event) => setEditTitle(event.target.value)}
            content={(event) => setEditContent(event.target.value)}
          />
        </Modal>
        <Modal
          isOpen={!!deleteId}
          onRequestClose={() => setDeleteId()}
          contentLabel="Example Modal"
          overLayClassName="modal-overlay"
          className="modal-content"
        >
          <DeleteModal
            delete={confirmDeleteModal}
            cancel={() => setDeleteId()}
          />
        </Modal>
      </section>
    </div>
  );
}
