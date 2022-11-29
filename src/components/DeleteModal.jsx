import "../components/DeleteModal.css";
export function DeleteModal(props) {
  return (
    <div className="DeleteModal">
      <p>Are you sure you want to delete this item?</p>
      <div className="flex-end">
        <button onClick={props.cancel}>Cancel</button>
        <button onClick={props.delete}>OK</button>
      </div>
    </div>
  );
}
