import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./styles";
function Nav() {
  return (
    <StyledNav>
      <h2>
        <Link to="/"> Bert Casino </Link>
      </h2>
    </StyledNav>
  );
}

export default Nav;
