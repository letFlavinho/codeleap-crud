import style from "../components/NewPost.css";
import api from "../api/api";
export function NewPost() {
  return (
    <div className="NewPost">
      <h3>What's on your mind?</h3>
      <label>Title</label>
      <input className="title" type="text" placeholder="Hello World" />
      <label>Content</label>
      <textarea className="content" type="text" placeholder="Content here" />
      <div className="flex-end">
        <button>CREATE</button>
      </div>
    </div>
  );
}
