import style from "../components/Post.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
export function Post() {
  return (
    <div className="Post">
      <header>
        <h3>My First Post at Codeleap Network </h3>
        <div className="buttons">
          <MdDeleteForever className="trashButton" size={25} />

          <FaRegEdit className="editButton" size={23} />
        </div>
      </header>
      <article>
        <div className="spans">
          <span>@Flabels</span>
          <span>25 minutes ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio
          ex, faucibus sed metus at, interdum pretium velit. Aliquam erat
          volutpat. Maecenas sollicitudin odio in risus tincidunt tempor. Etiam
          congue accumsan metus, quis lobortis risus ornare ut. Vivamus id orci
          luctus, hendrerit nibh vitae, accumsan tellus. Fusce placerat laoreet
          ullamcorper. Integer malesuada urna vitae scelerisque venenatis.
          Pellentesque non vehicula lacus, eu tincidunt dui.
        </p>
      </article>
    </div>
  );
}
