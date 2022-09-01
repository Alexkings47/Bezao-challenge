import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const Navbar = ({ color }) => {
  const [menu, setMenu] = useState(false);

  return (
    <StyledNav menu={menu} style={{ color: `${color}` }}>
      <div className="nav-top">
        <div className="logo_div">
          <Link to="/">
            <img
              className="logo"
              src={require("../../images/logo.png")}
              alt="logo"
            />
          </Link>
          <p className="title">Meals</p>
        </div>
        <div className="nav-right">
          <ul className="nav-link" style={{ color: `${color}` }}>
            <li>Home</li>
            <li>Menu</li>
            <li>Meal plans</li>
          </ul>
          <Button label={"sign up"} chosenClass={"nav-btn"} />
        </div>
        <button
          className="nav-menu-icon"
          onClick={() => {
            setMenu(!menu);
          }}
          style={{ color: `${color}` }}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <ul className={menu ? "flexed-list" : "hide-flexed-list"}>
        <li>Home</li>
        <li>Menu</li>
        <li>Meal Plans</li>
        <li>Sign Up</li>
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
  .nav-right{
    justify-content: space-between;
    
  } .nav-btn {
    width: 120px;
    height: 48px;
    background: #da3743;
    border-radius: 30px;
    margin-left: 1rem;
  }
  .logo_div,
  .nav-right {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
  }
  .logo {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .title {
    font-family: "Inter";
    font-size: 14px;
    font-weight: 600;
  }
  .nav-menu-icon {
    font-size: 20px;
    display: none;
  }

  .nav-link {
    display: flex;
    list-style: none;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0.004em;
    color: #666666;
    justify-content: space-between;
    align-items: center;

    li {
      margin-right: 1rem;
    }
  }
  .flexed-list,
  .hide-flexed-list {
    display: none;
    font-size: 13px;
    text-align: left;
    width: 100%;
    transform: translateX(0);
    transition: all 0.5s;
    margin-top: 2rem;
    width: 17rem;
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

  @media (max-width: 600px) {
    .nav-right {
      display: none;
    }
    .nav-menu-icon {
      display: block;
    }

    .flexed-list,
    .hide-flexed-list {
      display: block;
    }
  }
  /* @media screen and (max-width: 1300px) {
  } */
`;
