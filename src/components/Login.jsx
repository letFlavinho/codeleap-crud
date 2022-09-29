import style from "../components/Login.css";
export function Login() {
  return (
    <div className="container">
      <h3>Welcome to Leap network!</h3>
      <p>Please enter your username</p>
      <input type="text" placeholder="John Doe" />
      <div className="flex-end">
        <button>ENTER</button>
      </div>
    </div>
  );
}
