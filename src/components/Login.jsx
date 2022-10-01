import style from "../components/Login.css";
import { useState } from "react";
import { Posts } from "../Posts/Posts";
import api from "../api/api";

export function Login() {
  const [username, setUsername] = useState({ username: "" });
  async function handleSubmit() {
    if (username === "") {
      alert("Preencha o Campo");
      return;
    }
    axios
      .post("/...", {
        username: { username },
      })
      .then(function (response) {
        console.log("user submitted");
      })
      .catch(function (error) {
        console.error(error);
      });
    // const HandleKeyPress = (event) => {
    //   if (event.key === "Enter") {
    //     ();
    //   }
    // };
    function submitUser() {
      if (username.length > 0) {
      }
    }
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
          <button>ENTER</button>
        </div>
      </div>
    );
  }
}
