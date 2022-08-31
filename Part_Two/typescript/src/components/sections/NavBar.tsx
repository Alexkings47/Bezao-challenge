import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import backImg from "../../images/ellipse.png";
import Button from "../elements/Button";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const menuToggle = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const toggleMenu: { (event: MouseEvent): void } = (evt: Event) => {
      const target = evt.target as HTMLElement;
      if (
        target === menuToggle.current ||
        menuToggle.current?.contains(target)
      ) {
        return;
      } else {
        // setMenu(!menu);
      }
    };

    if (menu) {
      window.addEventListener("click", toggleMenu);
    }

    return () => {
      window.removeEventListener("click", toggleMenu);
    };
  }, [menu]);
  return (
    <StyledNav menu={menu}>
      <div className="nav-top">
        <div className="logo_div">
          <img
            className="logo"
            src={require("../../images/favicon.png")}
            alt="logo"
          />
          <p className="title">Writer's Block</p>
        </div>
        <button
          className="nav-menu-icon"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <ul
        className={menu ? "flexed-list" : "hide-flexed-list"}
        ref={menuToggle}
      >
        <li>About</li>
        <li>Blog</li>
        <li>Download</li>
        <li>Login</li>
        <li>Sign up</li>
      </ul>
      <div className="button-div">
        <Button label={"login"} color={"white"} />
        <Button label={"sign up"} color={"white"} />
      </div>
    </StyledNav>
  );
};

export default Navbar;
const StyledNav = styled.nav<{ menu: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: sticky;
  background: url(${backImg}) no-repeat right top;
  background-size: 8rem;
  background-color: var(--bgcolor);
  left: 0;
  top: 0;
  z-index: 100;

  .nav-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    z-index: 10;
    padding: 10px 1rem;
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
    color: white;
  }

  .flexed-list,
  .hide-flexed-list {
    font-size: 13px;
    text-align: left;
    background-color: white;
    color: black;
    width: 100%;
    transform: translateX(0);
    transition: all 0.5s;
    top: 5rem;
    width: 20rem;
    height: 12rem;
    z-index: 5;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    li {
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        orangered 50%
      );
      transition: all 0.5s;
      border-bottom: 1px solid #ffffff68;
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
  .button-div {
    display: none;
    margin-left: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1100px) {
  }
  @media screen and (max-width: 1300px) {
  }
`;
