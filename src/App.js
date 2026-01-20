// import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  function handleLogin() {
    setUser("Deepak");
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setUser("");
    setIsLoggedIn(false);
  }

  return (
    <div className="container">
      <div className="card">
        {isLoggedIn ? (
          <>
            <h2>Welcome, {user} 👋</h2>
            <p>You are successfully logged in.</p>
          </>
        ) : (
          <>
            <h2>Please Login</h2>
            <p>Click below to access your account.</p>
          </>
        )}

        <button
          className="button"
          onClick={isLoggedIn ? handleLogout : handleLogin}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}
export default App;
