import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../elements/Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <StyledNav menu={menu}>
      <div className="nav-top">
        <div className="logo_div">
          <img
            className="logo"
            src={require("../../images/logo.png")}
            alt="logo"
          />
          <p className="title">Meals</p>
        </div>
        <Button label={"sign up"} chosenClass={"nav-btn"} />
        <button
          className="nav-menu-icon"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <ul className={menu ? "flexed-list" : "hide-flexed-list"}>
        <li>Home</li>
        <li>Menu</li>
        <li>Meal Plans</li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;
  position: relative;
  padding: 1rem 2rem;

  .nav-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .nav-btn {
    width: 157px;
    height: 54px;
    background: #da3743;
    border-radius: 30px;
  }
  .logo_div {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .title {
    font-family: "neucha";
    font-size: 14px;
    font-weight: 600;
  }
  .nav-menu-icon {
    font-size: 20px;
  }

  .flexed-list,
  .hide-flexed-list {
    font-size: 13px;
    text-align: left;
    width: 100%;
    transform: translateX(0);
    transition: all 0.8s;
    margin-top: 2rem;
    width: 20rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 2px 2px 5px black;

    li {
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        orangered 50%
      );
      transition: all 0.5s;
      border-bottom: 1px solid #fef8f868;
      padding: 10px 1.5rem;
      background-size: 240%;
    }
    li:hover {
      background-position: 100%;
      transition: all 0.5s;
    }
  }
  .hide-flexed-list {
    transform: translateX(-80rem);
    height: 1px;
  }

  @media (max-width: 1100px) {
    .flexed-list {
      width: 50%;
    }
  }
  @media screen and (max-width: 1300px) {
  }
`;
