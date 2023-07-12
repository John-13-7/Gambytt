import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({ isLoggedIn: false, username: "" });
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();
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
          navigate("/");
        } else {
          setIsInvalid(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsInvalid(true);
      });
    setUsername("");
    setPassword("");
  };

  return (
    <LoginDiv>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setIsInvalid(false);
          }}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsInvalid(false);
          }}
        ></input>
        {isInvalid && <h6>invaid homie</h6>}
        <button type="submit">Login</button>
        <div className="text-container">
          <h3>No account?</h3>
          <h4 onClick={() => navigate("/Register")}>Register now!</h4>
        </div>
      </form>
    </LoginDiv>
  );
}

const LoginDiv = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Open-sans", sans-serif;
  background-color: #f5f5f5;

  form {
    padding: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0.5, 0.5);
    border-radius: 20px;
    background-color: #fff;
  }

  input {
    margin: 10px 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 1em;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    width: 75%;
    padding: 1em;
    border-radius: 8px;
    border: none;
    background-color: #3498db;
    color: white;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
  }

  .text-container {
    margin-top: 30px;
    text-align: center;
    h3,
    h4 {
      display: inline;
    }
    h3 {
      margin-right: 10px;
    }
    h4 {
      text-decoration: underline;

      &:hover {
        color: #7308ca;
        cursor: pointer;
      }
    }
  }
`;
export default Login;
