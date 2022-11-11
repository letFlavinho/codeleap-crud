import style from "../components/EditModal.css";
import { IoClose } from "react-icons/io5";

export function EditModal(props) {
  return (
    <div className="EditModal">
      <div className="header">
        <h3>Edit Item</h3>
        <IoClose className="closeButton" onClick={props.close} size={30} />
      </div>
      <label>Title</label>
      <input className="title" type="text" placeholder="Hello World" />
      <label>Content</label>
      <textarea className="content" type="text" placeholder="Content here" />
      <div className="flex-end">
        <button onClick={() => props.save}>SAVE</button>
      </div>
    </div>
  );
}
