import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { Posts } from "./Posts/Posts";

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
