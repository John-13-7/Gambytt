import React, { useState } from "react";
import roulette2 from "./roulette2.png";
import styled from "styled-components";
import axios from "axios";

function RouletteWheel() {
  const [rouletteValues, setRouletteValues] = useState([
    0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37,
    27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2,
  ]);
  const [spin, setSpin] = useState();
  const [degree, setDegree] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [wallet, setWallet] = useState(0);
  const [bet, setBet] = useState(0);
  const [betOneActive, isBetOneActive] = useState(true);
  const [betFiveActive, isBetFiveActive] = useState(false);
  const [betTenActive, isBetTenActive] = useState(false);
  const [updateBalance, setUpdateBalance] = useState(0);

  const handleBalance = () => {
    axios.patch(
      "http://localhost:5000/update_balance",
      { update: updateBalance },
      { withCredentials: true }
    );
  };

  const handleBetClick = (bet) => {
    setBet(bet);
    switch (bet) {
      case 1:
        isBetOneActive(true);
        isBetFiveActive(false);
        isBetTenActive(false);
        break;
      case 5:
        isBetOneActive(false);
        isBetFiveActive(true);
        isBetTenActive(false);
        break;
      case 10:
        isBetOneActive(false);
        isBetFiveActive(false);
        isBetTenActive(true);
        break;
    }
  };

  const getSpin = () => {
    setIsAnimating(true);
    const numSpins = Math.floor(Math.random() * 10) + 5;
    const spinInterval = setInterval(() => {
      setDegree((degree) => (degree + 30) % 360);
    }, 50);

    setTimeout(() => {
      clearInterval(spinInterval);
      const newNum = Math.floor(Math.random() * 38);
      setSpin(rouletteValues[newNum]);
      const newDegree = Math.floor(-9.47 * newNum);
      setDegree(newDegree);
      setIsAnimating(false);
      if (spin === bet) {
        // Change this condition according to your game logic
        setWallet(wallet + bet); // Change this according to your game logic
      }
    }, numSpins * 1000);
  };
  return (
    <RouletteDiv>
      <div className="roulette-wheel">
        <img
          src={roulette2}
          className="wheel"
          style={{
            transform: `rotate(${degree}deg)`,
            animationPlayState: isAnimating ? "running" : "paused",
          }}
        ></img>
      </div>
      <BetsDiv>
        <button className="spin" onClick={getSpin}>
          SPIN
        </button>
        <button
          className={`bet1 ${betOneActive === true ? "active" : ""}`}
          onClick={() => handleBetClick(1)}
        >
          Bet 1
        </button>
        <button
          className={`bet5 ${betFiveActive === true ? "active" : ""}`}
          onClick={() => handleBetClick(5)}
        >
          Bet 5
        </button>
        <button
          className={`bet10 ${betTenActive === true ? "active" : ""}`}
          onClick={() => handleBetClick(10)}
        >
          Bet 10
        </button>
      </BetsDiv>
      <div>
        <h3>Number: {spin}</h3>
        <h3>Wallet: {wallet} </h3>
        <h3>Bet: {bet}</h3>
      </div>
    </RouletteDiv>
  );
}

const RouletteDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  .roulette-wheel {
    margin-bottom: 1rem;
    img {
      flex-direction: column;
      border: 4px solid white;
      border-radius: 50%;
      width: 20rem;
      height: 20rem;
    }
  }
`;

const BetsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    cursor: pointer;
    height: 5rem;
    width: 5rem;
    border-radius: 4px;

    &.active {
      background-color: #f5f51e;
      color: black;
      border: 1px solid black;
    }
  }
`;

export default RouletteWheel;
