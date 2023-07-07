import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [wallet, setWallet] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: ", username, " password: ", password, " email: ", email);
    if (password !== confirmPassword) {
      console.log("passwords no not match");
    } else if (email !== confirmEmail) {
      console.log("emails do not match");
    } else {
      axios
        .post("http://localhost:5000/register", {
          username,
          password,
          email,
          wallet,
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <StyledInput
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></StyledInput>
        <StyledInput
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></StyledInput>
        <StyledInput
          type="password"
          placeholder="retype password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></StyledInput>
        <StyledInput
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></StyledInput>
        <StyledInput
          type="text"
          placeholder="retype email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        ></StyledInput>
        <StyledButton type="submit">Register</StyledButton>
      </form>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 2em;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  h1 {
    color: #333;
    margin-bottom: 2em;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1em;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 1em;
  border-radius: 8px;
  border: none;
  background-color: #3498db;
  color: white;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
`;

export default Register;
