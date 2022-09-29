import "./App.css";
import React, { useState, useEffect } from "react";
import { Logo } from "./components/Logo";
import { Login } from "./components/Login";
function App() {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <div>
        {showElement ? (
          <Logo />
        ) : (
          <div>
            <Login />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
