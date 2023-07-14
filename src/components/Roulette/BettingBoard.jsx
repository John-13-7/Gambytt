import React, { useState } from "react";
import styled from "styled-components";
function BettingBoard() {
  const [rouletteValues, setRouletteValues] = useState([
    0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 37,
    27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2,
  ]);
  const boardButtons = Array.from(Array(50).keys());
  const buttonDisplayText = {
    37: "00",
    38: "2 to 1",
    39: "2 to 1",
    40: "2 to 1",
    41: "1st 12",
    42: "2nd 12",
    43: "3rd 12",
    44: "1 to 18",
    45: "EVEN",
    46: "RED",
    47: "BLACK",
    48: "ODD",
    49: "19-36",
  };

  return (
    <Board>
      {boardButtons.map((b, index) => (
        <div className="button-container">
          <button className="individual-button" key={index}>
            {buttonDisplayText[b] || b}
          </button>
        </div>
      ))}
    </Board>
  );
}

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 75px);
  grid-template-rows: repeat(13, 75px);
  margin: 1.5rem;
  margin-top: 50px;

  .button-container {
    background-color: #4cc84c;
    width: 100%;
    height: 100%;
    border: 2px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      .individual-button {
        background-color: #4cc84c;
        border: 3px solid white;
      }
      grid-column: 1 / 2;
      grid-row: 1 / span 2;
    }
    &:nth-child(2) {
      grid-column: 2;
      grid-row: 3;
    }
    &:nth-child(3) {
      grid-column: 2;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(4) {
      grid-column: 2;
      grid-row: 1;
    }
    &:nth-child(5) {
      .individual-button {
        background-color: black;
      }
      grid-column: 3;
      grid-row: 3;
    }
    &:nth-child(6) {
      grid-column: 3;
      grid-row: 2;
    }
    &:nth-child(7) {
      .individual-button {
        background-color: black;
      }
      grid-column: 3;
      grid-row: 1;
    }
    &:nth-child(8) {
      grid-column: 4;
      grid-row: 3;
    }
    &:nth-child(9) {
      grid-column: 4;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(10) {
      grid-column: 4;
      grid-row: 1;
    }
    &:nth-child(11) {
      grid-column: 5;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(12) {
      grid-column: 5;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(13) {
      grid-column: 5;
      grid-row: 1;
    }
    &:nth-child(14) {
      grid-column: 6;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(15) {
      grid-column: 6;
      grid-row: 2;
    }
    &:nth-child(16) {
      grid-column: 6;
      grid-row: 1;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(17) {
      grid-column: 7;
      grid-row: 3;
    }
    &:nth-child(18) {
      grid-column: 7;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(19) {
      grid-column: 7;
      grid-row: 1;
    }
    &:nth-child(20) {
      grid-column: 8;
      grid-row: 3;
    }
    &:nth-child(21) {
      grid-column: 8;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(22) {
      grid-column: 8;
      grid-row: 1;
    }
    &:nth-child(23) {
      grid-column: 9;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(24) {
      grid-column: 9;
      grid-row: 2;
    }
    &:nth-child(25) {
      grid-column: 9;
      grid-row: 1;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(26) {
      grid-column: 10;
      grid-row: 3;
    }
    &:nth-child(27) {
      grid-column: 10;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(28) {
      grid-column: 10;
      grid-row: 1;
    }
    &:nth-child(29) {
      grid-column: 11;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(30) {
      grid-column: 11;
      grid-row: 2;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(31) {
      grid-column: 11;
      grid-row: 1;
    }
    &:nth-child(32) {
      grid-column: 12;
      grid-row: 3;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(33) {
      grid-column: 12;
      grid-row: 2;
    }
    &:nth-child(34) {
      grid-column: 12;
      grid-row: 1;
      .individual-button {
        background-color: black;
      }
    }
    &:nth-child(35) {
      grid-column: 13;
      grid-row: 3;
    }
    &:nth-child(36) {
      grid-column: 13;
      grid-row: 2;
    }
    &:nth-child(37) {
      grid-column: 13;
      grid-row: 1;
    }
    //00
    &:nth-child(38) {
      .individual-button {
        border: 3px solid white;
        background-color: #4cc84c;
      }
      grid-column: 1;
      grid-row: 3 / span 2;
    }
    &:nth-child(39) {
      grid-column: 14;
      grid-row: 3;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(40) {
      grid-column: 14;
      grid-row: 2;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    &:nth-child(41) {
      grid-column: 14;
      grid-row: 1;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 1rem;
      }
    }
    //1st 12
    &:nth-child(42) {
      grid-column: 2 / span 4;
      grid-row: 4;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 2rem;
      }
    }
    &:nth-child(43) {
      grid-column: 6 / span 4;
      grid-row: 4;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 2rem;
      }
    }
    &:nth-child(44) {
      grid-column: 10 / span 4;
      grid-row: 4;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 2rem;
      }
    }
    &:nth-child(45) {
      grid-column: 2 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 2rem;
      }
    }
    &:nth-child(46) {
      grid-column: 4 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 2rem;
      }
    }
    &:nth-child(47) {
      grid-column: 6 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: red;
        border-radius: 0;
        border: 3px solid white;
        font-size: 2rem;
      }
    }
    &:nth-child(48) {
      grid-column: 8 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: black;
        border-radius: 0;
        border: 3px solid white;
        font-size: 2rem;
      }
    }
    &:nth-child(49) {
      grid-column: 10 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 2rem;
      }
    }
    &:nth-child(50) {
      grid-column: 12 / span 2;
      grid-row: 5;
      .individual-button {
        width: 80%;
        height: 80%;
        background-color: #4cc84c;
        border-radius: 0;
        border: 3px solid white;
        font-size: 2rem;
      }
    }
  }

  .individual-button {
    font-family: "Open-sans", sans-serif;
    width: 65px;
    height: 65px;
    font-size: 14px;
    color: white;
    background-color: red;
    font-size: 40px;
    border-radius: 50%;
    border: 2px solid black;
  }
`;

export default BettingBoard;
