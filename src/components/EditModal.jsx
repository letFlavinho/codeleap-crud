import style from "../components/EditModal.css";

export function EditModal() {
  return (
    <div className="EditModal">
      <h3>Edit Item</h3>
      <label>Title</label>
      <input className="title" type="text" placeholder="Hello World" />
      <label>Content</label>
      <textarea className="content" type="text" placeholder="Content here" />
      <div className="flex-end">
        <button>SAVE</button>
      </div>
    </div>
  );
}
