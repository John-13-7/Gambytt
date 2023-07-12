import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <HomeDiv>
      <div onClick={() => navigate("/BlackJack")}>
        <h3>BlackJack</h3>
      </div>
      <div onClick={() => navigate("/Roulette")}>
        <h3>Roulette</h3>
      </div>
      <div onClick={() => navigate("/Slots")}>
        <h3>Slots</h3>
      </div>
    </HomeDiv>
  );
}
export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #b87ef7;
  align-items: center;
  height: 100vh;
  font-family: "Open-sans", sans-serif;
  background-color: #f5f5f5;
  font-size: 2rem;

  a {
    text-decoration: none;
    color: black;
  }

  div {
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    margin: 10px;
  }
`;
export default Home;
