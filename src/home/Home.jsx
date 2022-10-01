import React, { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { Login } from "../components/Login";

export function Home() {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);

  return (
    <div>
      {showElement ? (
        <Loading />
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}
