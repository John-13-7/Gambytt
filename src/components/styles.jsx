import styled from "styled-components";

//home
export const styledHome = styled.div`
  display: flex;
  justify-content: space-between;
  background: #962020;
  padding: 40px;
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

//nav
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #962020;
  padding: 40px;
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

//roulette
export const ButtonWrappers = styled.div`
  display: flex;
  flex-wrap: wrap;
  .individual-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-container {
    width: 70px;
    height: 70px;
    border: 2px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
`;
