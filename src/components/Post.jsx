import style from "../components/Post.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { EditModal } from "./EditModal";
import { DeleteModal } from "./DeleteModal";
export function Post(props) {
  const { setId } = props;
  return (
    <div className="Post">
      <header>
        <h3>{props.title} </h3>
        <div className="buttons">
          <MdDeleteForever
            onClick={props.openDeleteModal}
            className="trashButton"
            size={25}
          />

          <FaRegEdit
            onClick={props.openEditModal}
            className="editButton"
            size={23}
          />
        </div>
      </header>
      <article>
        <div className="spans">
          <span>{props.name}</span>
          <span>{props.time}</span>
        </div>
        <p>{props.content}</p>
      </article>
    </div>
  );
}
