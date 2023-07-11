import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({ isLoggedIn: false, username: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/login",
        { username, password },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.token);
          setUser({ isLoggedIn: true, username: username }); // username is set here
          console.log("User: ", user.username);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred during login."); // alert user on error
      });
  };

  const handleLogout = () => {
    axios
      .post("http://localhost:5000/logout", {}, { withCredentials: true })
      .then((response) => {
        setUser({ isLoggedIn: false, username: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred during logout."); // alert user on error
      });
  };

  useEffect(() => {
    console.log(user.isLoggedIn);
  }, []);

  return (
    <div>
      {user.isLoggedIn ? (
        <>
          <div>Welcome, {user.username}!</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
