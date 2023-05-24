import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <li>
        <Link to="/BlackJack"> BlackJack </Link>
      </li>
      <li>
        <Link to="/Roulette"> Roulette </Link>
      </li>
      <li>
        <Link to="/Slots"> Slots </Link>
      </li>
      <li>
        <Link to="/Scratchers"> Scratchers </Link>
      </li>
      <li>
        <Link to="/Lottery"> Lottery </Link>
      </li>
    </div>
  );
}

export default Home;
