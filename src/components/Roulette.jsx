import React from 'react';
import styled from 'styled-components';
import roulettewheel from "../images/roulettewheel.png";
import { useState, useEffect } from "react";

function Roulette() {
  //Values 0-36, usually use these to lookup the roulette values
  const [spin, setSpin] = useState();
  //Image spins in degrees to where the value is at [0] = 0 degs... [35] = 355 degs
  const [degree, setDegree] = useState(0);
  //All roulette values are previously set, starts at green 0 and ends in 26 black
  const [rouletteValues, setRouletteValues] = useState([0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30,
    8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]);
  //Animates spinning so it will not automatically go to the spin
  const [isAnimating, setIsAnimating] = useState(true);
  //Players local wallet, this will not work for other places like on BJ or Slots
  const [wallet, setWallet] = useState(0);
  //Players Bet
  const [bet, setBet] = useState(0);
  //Bet sizes, the minimum will be set automatically to $1
  const [betOneActive, isBetOneActive] = useState(true);
  const [betFiveActive, isBetFiveActive] = useState(false);
  const [betTenActive, isBetTenActive] = useState(false);

  //TODO
  //const bet1arr[k,v]
  //const bet5arr[k,v]
  //const bet10arr[k,v]
  //const prevtransaction(0) and only update it after I make a transaction or i hit a button so I can undo
  //function undo previous transaction
  //function clear bets

  //Notes
  //Only do the calculations if I win something dont always do them, maybe a flag, and make sure to multiply corectly
  //This can all be done in the on clicks inside of the buttons for each buttton 
  //the other weird bets can be done last, maybe add values 37, 38, 39, 40....
  

  const handleBetClick = (bet) => {
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
    };
  };

  const getSpin = () => {
    const numSpins = Math.floor(Math.random() * 5) + 2; // random number of spins between 2 and 6
    const spinInterval = setInterval(() => {
      setDegree((degree) => degree + 10); // increment the degree by 10 every 50ms
    }, 25);

    setTimeout(() => {
      clearInterval(spinInterval);
      const newNum = Math.floor(Math.random() * 37);
      setSpin(rouletteValues[newNum]);
      const newDegree = Math.floor(-9.7 * newNum);
      setDegree(newDegree);
      setIsAnimating(true);
    }, numSpins * 1000);
  };

  //condition ? expressionIfTrue : expressionIfFalse
  return (
    <StyledDiv>
      <BetWrappers>
        <BetButton className='spin' onClick={getSpin}>SPIN</BetButton>
        <BetButton className={`bet1 ${betOneActive === true ? "active" : ""}`}
          onClick={() => handleBetClick(1)}>Bet 1</BetButton>
        <BetButton className={`bet5 ${betFiveActive === true ? "active" : ""}`}
          onClick={() => handleBetClick(5)}>Bet 5</BetButton>
        <BetButton className={`bet10 ${betTenActive === true ? "active" : "" }`}
          onClick={() => handleBetClick(10)}>Bet 10</BetButton>
        <Wallet className='funds'>{wallet}</Wallet>
      </BetWrappers>
      <BettingTableButtons className='buttons'>
        <GreenTableButton className='zero'>0</GreenTableButton>
        <RedTableButton className='one'>1</RedTableButton>
        <BlackTableButton className='two'>2</BlackTableButton>
        <RedTableButton className='three'>3</RedTableButton>
        <BlackTableButton className='four'>4</BlackTableButton>
        <RedTableButton className='five'>5</RedTableButton>
        <BlackTableButton className='six'>6</BlackTableButton>
        <RedTableButton className='seven'>7</RedTableButton>
        <BlackTableButton className='eight'>8</BlackTableButton>
        <RedTableButton className='nine'>9</RedTableButton>
        <BlackTableButton className='ten'>10</BlackTableButton>
        <BlackTableButton className='eleven'>11</BlackTableButton>
        <RedTableButton className='twelve'>12</RedTableButton>
        <BlackTableButton className='thirteen'>13</BlackTableButton>
        <RedTableButton className='fourteen'>14</RedTableButton>
        <BlackTableButton className='fifteen'>15</BlackTableButton>
        <RedTableButton className='sixteen'>16</RedTableButton>
        <BlackTableButton className='seventeen'>17</BlackTableButton>
        <RedTableButton className='eighteen'>18</RedTableButton>
        <RedTableButton className='nineteen'>19</RedTableButton>
        <BlackTableButton className='twenty'>20</BlackTableButton>
        <RedTableButton className='twentyone'>21</RedTableButton>
        <BlackTableButton className='twentytwo'>22</BlackTableButton>
        <RedTableButton className='twentythree'>23</RedTableButton>
        <BlackTableButton className='twentyfour'>24</BlackTableButton>
        <RedTableButton className='twentyfive'>25</RedTableButton>
        <BlackTableButton className='twentysix'>26</BlackTableButton>
        <RedTableButton className='twentyseven'>27</RedTableButton>
        <BlackTableButton className='twentyeight'>28</BlackTableButton>
        <BlackTableButton className='twentynine'>29</BlackTableButton>
        <RedTableButton className='thirty'>30</RedTableButton>
        <BlackTableButton className='thirtyone'>31</BlackTableButton>
        <RedTableButton className='thirtytwo'>32</RedTableButton>
        <BlackTableButton className='thirtythree'>33</BlackTableButton>
        <RedTableButton className='thirtyfour'>34</RedTableButton>
        <BlackTableButton className='thirtyfive'>35</BlackTableButton>
        <RedTableButton className='thirtysix'>36</RedTableButton>
        <MiscButton className='twotooneone'>2to1</MiscButton>
        <MiscButton className='twotoonetwo'>2to1</MiscButton>
        <MiscButton className='twotoonethree'>2to1</MiscButton>
        <MiscButton className='firsttwelve'>1st12</MiscButton>
        <MiscButton className='secondtwelve'>2nd12</MiscButton>
        <MiscButton className='thirdtwelve'>3rd12</MiscButton>
        <MiscButton className='onetoeighteen'>1to18</MiscButton>
        <MiscButton className='even'>Even</MiscButton>
        <MiscButton className='red'>Red</MiscButton>
        <MiscButton className='black'>Black</MiscButton>
        <MiscButton className='odd'>Odd</MiscButton>
        <MiscButton className='nineteentothirtysix'>19to36</MiscButton>
      </BettingTableButtons>
      <img src={roulettewheel} className="wheel" style={{
        transform: `rotate(${degree}deg)`,
        animationPlayState: isAnimating ? 'running' : 'paused'
      }}></img>
      {spin} {degree} {wallet} {bet}
    </StyledDiv>
  );
};

const BetWrappers = styled.div`
  display: flex;
  flex-wrap: wrap;
  .funds{
    flex-basis: 100%;
    margin-top: 0;
  }
`;

const Wallet = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 3rem;
`;

const StyledDiv = styled.div`
  background-color: #95edf0;
  display: flex;
  .wheel{
    height: 50vh;
    margin-top: 20px;
  }
  .spin{
      margin-left: 20px;
  }
  .buttons{
    margin-top: 20px;
  }
    
`;

const BettingTableButtons = styled.button`
  background: none;
  border: none;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(13, 1fr);
  gap: 1rem;
  margin: auto;
  text-align: center;
  .zero{
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    align-self: center;
  }
  .one{
    grid-column-start: 2;
    grid-row-start: 3;
  }
  .two{
    grid-column-start: 2;
    grid-row-start: 2;
  }
  .three{
    grid-column-start: 2;
    grid-row-start: 1;
  }
  .four{
    grid-column-start: 3;
    grid-row-start: 3;
  }
  .five{
    grid-column-start: 3;
    grid-row-start: 2;
  }
  .six{
    grid-column-start: 3;
    grid-row-start: 1;
  }
  .seven{
    grid-column-start: 4;
    grid-row-start: 3;
  }
  .eight{
    grid-column-start: 4;
    grid-row-start: 2;
  }
  .nine{
    grid-column-start: 4;
    grid-row-start: 1;
  }
  .ten{
    grid-column-start: 5;
    grid-row-start: 3;
  }
  .eleven{
    grid-column-start: 5;
    grid-row-start: 2;
  }
  .twelve{
    grid-column-start: 5;
    grid-row-start: 1;
  }
  .thirteen{
    grid-column-start: 6;
    grid-row-start: 3;
  }
  .fourteen{
    grid-column-start: 6;
    grid-row-start: 2;
  }
  .fifteen{
    grid-column-start: 6;
    grid-row-start: 1;
  }
  .sixteen{
    grid-column-start: 7;
    grid-row-start: 3;
  }
  .seventeen{
    grid-column-start: 7;
    grid-row-start: 2;
  }
  .eighteen{
    grid-column-start: 7;
    grid-row-start: 1;
  }
  .nineteen{
    grid-column-start: 8;
    grid-row-start: 3;
  }
  .twenty{
    grid-column-start: 8;
    grid-row-start: 2;
  }
  .twentyone{
    grid-column-start: 8;
    grid-row-start: 1;
  }
  .twentytwo{
    grid-column-start: 9;
    grid-row-start: 3;
  }
  .twentythree{
    grid-column-start: 9;
    grid-row-start: 2;
  }
  .twentyfour{
    grid-column-start: 9;
    grid-row-start: 1;
  }
  .twentyfive{
    grid-column-start: 10;
    grid-row-start: 3;
  }
  .twentysix{
    grid-column-start: 10;
    grid-row-start: 2;
  }
  .twentyseven{
    grid-column-start: 10;
    grid-row-start: 1;
  }
  .twentyeight{
    grid-column-start: 11;
    grid-row-start: 3;
  }
  .twentynine{
    grid-column-start: 11;
    grid-row-start: 2;
  }
  .thirty{
    grid-column-start: 11;
    grid-row-start: 1;
  }
  .thirtyone{
    grid-column-start: 12;
    grid-row-start: 3;
  }
  .thirtytwo{
    grid-column-start: 12;
    grid-row-start: 2;
  }
  .thirtythree{
    grid-column-start: 12;
    grid-row-start: 1;
  }
  .thirtyfour{
    grid-column-start: 13;
    grid-row-start: 3;
  }
  .thirtyfive{
    grid-column-start: 13;
    grid-row-start: 2;
  }
  .thirtysix{
    grid-column-start: 13;
    grid-row-start: 1;
  }
  .twotooneone{
    grid-column-start: 14;
    grid-row-start: 3;
  }
  .twotoonetwo{
    grid-column-start: 14;
    grid-row-start: 2;
  }
  .twotoonethree{
    grid-column-start: 14;
    grid-row-start: 1;
  }
  .firsttwelve{
    grid-column-start: 2;
    grid-row-start: 4;
    grid-column-end: span 4;
    grid-row-end: span 4;
  }
  .secondtwelve{
    grid-column-start: 6;
    grid-row-start: 4;
    grid-column-end: span 4;
    grid-row-end: span 4;
  }
  .thirdtwelve{
    grid-column-start: 10;
    grid-row-start: 4;
    grid-column-end: span 4;
    grid-row-end: span 4;
  }
  .onetoeighteen{
    grid-column-start: 2;
    grid-row-start: 5;
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
  .even{
    grid-column-start: 4;
    grid-row-start: 5;
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
  .red{
    grid-column-start: 6;
    grid-row-start: 5;
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
  .black{
    grid-column-start: 8;
    grid-row-start: 5;
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
  .odd{
    grid-column-start: 10;
    grid-row-start: 5;
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
  .nineteentothirtysix{
    grid-column-start: 12;
    grid-row-start: 5;
    grid-column-end: span 2;
    grid-row-end: span 2;
  }



`;

const RedTableButton = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  background-color: red;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  border: none;
`;

const BlackTableButton = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  background-color: black;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  border: none;
`;

const GreenTableButton = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  background-color: green;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  color: white;
`;

const MiscButton = styled.button`
  font-family: "Teko", sans-serif;
  font-size: 2.2rem;
`;

const BetButton = styled.button`
    font-family: "Teko", sans-serif;
    font-size: 2.2rem;
    cursor: pointer;
    color: black;
    height: 100px;
    width: 100px;
    display: block;
    pointer-events: all;
    z-index: 999;
    margin-top: 20px;
    border-radius: 4px;

    &.active{
      background-color: #f5f51e;
      color: black;
      border: 1px solid black;
    }
    &:not(:last-child) {
    margin-right: 10px; // Add some right margin to all but the last button
    }
    
`;

export default Roulette;