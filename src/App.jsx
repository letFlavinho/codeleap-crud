import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { Posts } from "./routes/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
