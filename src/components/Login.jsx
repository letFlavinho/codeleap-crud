import style from "../components/Login.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState();
  return (
    <div className="Login">
      <h3>Welcome to Leap network!</h3>
      <p>Please enter your username</p>
      <input
        type="text"
        placeholder="John Doe"
        value={username}
        // onChange={(event) => setUsername(event.target.value)}
        // onKeyPress={HandleKeyPress}
      />
      <div className="flex-end">
        <Link to={`/Posts`} className="button">
          ENTER
        </Link>
      </div>
    </div>
  );
}
