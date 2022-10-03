import style from "./Posts.css";
import { NewPost } from "../../components/NewPost";
import { Post } from "../../components/Post";
import { FiLogOut } from "react-icons/fi";
import { Outlet, Link } from "react-router-dom";

export function Posts() {
  return (
    <div className="Posts">
      <header>
        <h3>CodeLeap Network</h3>
        <Link to={`/`}>
          <FiLogOut className="logoutbtn" />
        </Link>
      </header>
      <section>
        <NewPost />
        <Post className="Post" />
        <Post className="Post" />
        <Post className="Post" />
        <Post className="Post" />
      </section>
    </div>
  );
}
