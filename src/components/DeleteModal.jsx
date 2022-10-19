import style from "../components/DeleteModal.css";
export function DeleteModal(props) {
  return (
    <div className="DeleteModal">
      <p>Are you sure you want to delete this item?</p>
      <div className="flex-end">
        <button>Cancel</button>
        <button>OK</button>
      </div>
    </div>
  );
}
