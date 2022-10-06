import style from "../components/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  return (
    <div className="Login">
      <h3>Welcome to Leap network!</h3>
      <p>Please enter your username</p>
      <input
        type="text"
        placeholder="John Doe"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <div className="flex-end">
        <button
          type="submit"
          onClick={() => {
            navigate("/Posts", { state: { username: username } });
          }}
          className="button"
        >
          ENTER
        </button>
      </div>
    </div>
  );
}
