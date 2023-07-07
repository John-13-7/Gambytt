import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <StyledNav>
      <h2>
        <Link to="/"> Bert Casino </Link>
      </h2>
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
      <li>
        <Link to="/Login"> Login</Link>
      </li>
      <li>
        <Link to="/Register"> Register</Link>
      </li>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #96207e;
  padding: 10px;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
  h2 {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    font-size: 3rem;
  }
  li {
    font-size: 1.8rem;
    list-style: none;
    padding: 40px;
    font-family: "Bebas Neue", cursive;
  }
`;

export default Nav;
