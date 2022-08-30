import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function showMenu() {
    setMenu(!menu);
  }

  return (
    <StyledNav menu={menu}>
      <img className="logo" src={require("../../images/logo.png")} alt="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Resaurants</li>
        <li>Home Chefs</li>
        <li>Offers</li>
        <li>About us</li>
      </ul>
      <button className="nav-signup-btn" onClick={showMenu}>
        sign up
      </button>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;

  .logo {
    width: 73.46px;
    height: 36.8px;
  }
  .nav-links {
    display: flex;
    list-style: none;
    font-size: 16px;
    line-height: 19.2px;
    justify-content: center;
    align-items: center;

    li:not(:last-child) {
      margin-right: 40px;
    }
  }

  .nav-signup-btn {
    width: 102px;
    height: 38px;
    color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 31px;
    font-family: "Inter";
    background: none;
  }

  @media screen and (max-width: 1300px) {
    padding: 1rem 10px;
    .nav-menu-icon {
      display: none;
    }

    .nav-links {
      flex: 0.95;
    }
  }
  @media (max-width: 1100px) {
    .nav-links {
      display: ${(props) => (props.menu ? "flex" : "none")};
      position: absolute;
      bottom: -3rem;
      left: 50%;
      transform: translateX(-50%);
      width: 30rem;
      flex: 1;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    min-height: 10rem;
  }
`;

export default Navbar;
