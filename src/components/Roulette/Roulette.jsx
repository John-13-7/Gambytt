import React from "react";
import styled from "styled-components";
import BettingBoard from "./BettingBoard";
function Roulette() {
  return (
    <RouletteDiv>
      <BettingBoard />
    </RouletteDiv>
  );
}

const RouletteDiv = styled.div`
  background-color: #4cc84c;
  display: flex;
`;

export default Roulette;
