import "../components/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const HandleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/Posts", { state: { username: username } });
    }
  };
  return (
    <div className="Login">
      <h3>Welcome to Leap network!</h3>
      <p>Please enter your username</p>
      <input
        type="text"
        placeholder="John Doe"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        onKeyPress={HandleKeyPress}
      />
      <div className="flex-end">
        <button
          disabled={!username}
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
