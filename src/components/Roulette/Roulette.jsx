import React from "react";
import styled from "styled-components";
import BettingBoard from "./BettingBoard";
import RouletteWheel from "./RouletteWheel";
function Roulette() {
  return (
    <RouletteDiv>
      <BettingBoard />
      <RouletteWheel />
    </RouletteDiv>
  );
}

const RouletteDiv = styled.div`
  background-color: #4cc84c;
  display: flex;
`;

export default Roulette;
