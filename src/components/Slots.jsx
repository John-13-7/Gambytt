import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
function Slots() {
  const [pushedSpin, isPushedSpin] = "";
  const [slotValues, setSlotValues] = [];

  useEffect(() => {
    runSlot();
  }, []);

  const runSlot = () => {
    let i = 9;
    while (i > 1) {
      i--;
    }
  };

  return (
    <StyledDiv>
      <StyledSlots>
        <div className="slot">1</div>
        <div className="slot">2</div>
        <div className="slot">3</div>
        <div className="slot">4</div>
        <div className="slot">5</div>
        <div className="slot">6</div>
        <div className="slot">7</div>
        <div className="slot">8</div>
        <div className="slot">9</div>
      </StyledSlots>
      <button className="spin">SPIN!XD</button>
    </StyledDiv>
  );
}

const StyledSlots = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 20px;
  background-color: #37a7ec;
  margin-top: 50px;
  .slot {
    background-color: white;
    padding: 2px;
    border: 2px solid black;
    text-align: center;
    font-size: 200px;
  }
`;

const StyledDiv = styled.div`
  margin-bottom: -1rem;
  .spin {
    padding: 2rem;
  }
`;

export default Slots;
