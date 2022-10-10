export function ApiPost(props) {
  return (
    <div className="Post">
      <header>
        <h3>{props.title} </h3>
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
