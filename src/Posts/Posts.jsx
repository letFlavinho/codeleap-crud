import style from "./Posts.css";
import { NewPost } from "../components/NewPost";
import { Post } from "../components/Post";
export function Posts() {
  return (
    <div className="Posts">
      <header>
        <h3>CodeLeap Network</h3>
      </header>
      <section>
        <NewPost />
        <Post className="Post" />
      </section>
    </div>
  );
}
