import style from "../components/DeleteModal.css";
export function DeleteModal(props) {
  const { id, loadPost, deletePost } = props;

  const delPost = async (id) => {
    try {
      await deletePost(id);
      await loadPost();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="DeleteModal">
      <p>Are you sure you want to delete this item?</p>
      <div className="flex-end">
        <button onClick={props.cancel}>Cancel</button>
        <button onClick={() => delPost(id)}>OK</button>
      </div>
    </div>
  );
}
