import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [updateBalance, setUpdateBalance] = useState(420);
  const navigate = useNavigate();
  const handleBalance = () => {
    axios.patch(
      "http://localhost:5000/update_balance",
      { update: updateBalance },
      { withCredentials: true }
    );
  };

  const handleLogout = () => {
    axios
      .post("http://localhost:5000/logout", {}, { withCredentials: true })
      .catch((error) => {
        console.log(error);
        alert("An error occurred during logout."); // alert user on error
      });
  };
  return (
    <LogoutDiv>
      <div>
        <h1>Tired of losing money?</h1>
        <button onClick={handleLogout}>Click me to logout</button>
      </div>
      <div>
        <h1>Changed your mind?</h1>
        <button onClick={() => navigate("/")}>
          Click me to continue losing money
        </button>
      </div>
    </LogoutDiv>
  );
}
const LogoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Open-sans", sans-serif;
  background-color: #f5f5f5;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    margin: 10px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    width: 500px;
    height: 150px;
  }

  button {
    padding: 10px;
    font-size: 1rem;
  }
`;
export default Logout;
