import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <StyledNav>
      <h2>
        <Link to="/">Gambytt</Link>
      </h2>
      <h3>
        <Link to="/Login">Login</Link>
      </h3>
      <h3>
        <Link to="/Logout">Logout</Link>
      </h3>
      <h3>
        <Link to="/P">Playground</Link>
      </h3>
    </StyledNav>
  );
}

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background: #e314f2;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
  h2 {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    font-size: 3.5rem;
  }
`;

export default Nav;
