import React from "react";
import styled from "styled-components";
import backImg1 from "../../images/ellipsedown.png";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header_text">
        <h2 className="header_text--title">
          Art of the pen at it's mightiest on the writers' block
        </h2>
        <p className="header_text--desc">
          Explore Millions of Writings, Articles, Stories, Essays, in one click!
          Helping african Writers have a voice and $funds
        </p>
      </div>
      <div className="header_image">
        <img
          className="header_image1"
          alt="header_image1"
          src={require("../../images/nimasa.png")}
        />
        <div className="header_image-bottom">
          <img
            className="header_image2"
            alt="header_image2"
            src={require("../../images/girl.jpg")}
          />
          <img
            className="header_image4"
            alt="header_image4"
            src={require("../../images/storm.jpeg")}
          />
          <img
            className="header_image3"
            alt="header_image3"
            src={require("../../images/amanda.jpg")}
          />
        </div>
      </div>
      <div className="button-div">
        <Link to="/readprofile">
          <Button label="Reader" color="white" />
        </Link>
        <Link to="/authenticate">
          <Button label="Writer" color="var(--lightgreen)" />
        </Link>
      </div>
      <img
        className="sponsors"
        src={require("../../images/sponsors.png")}
        alt="sponsors"
      />
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  min-height: 100vh;
  background: url(${backImg1}) left bottom no-repeat
  ;
  background-size: 12rem, 12rem;
  background-color: var(--bgcolor);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  .header_text {
    max-width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding: 2rem 0;

    &--title {
      font-size: 28px;
      color: #fff;
      margin-bottom: 1rem;
      font-family: "neucha";
      /* text-shadow: 2px 8px 8px #f90d6f; */
    }
    &--desc {
      font-size: 12px;
      color: #f1f1f1dd;
    }
  }

  .header_image {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .header_image-bottom {
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: space-between;
    }

    &1:hover,
    &2:hover,
    &3:hover,
    &4:hover {
      transform: scale(1.05);
      z-index: 20;
      box-shadow: 0 2rem 4rem rgb(0 0 0 / 50%);
      outline: 10px solid #55c57a;
    }
    &1 {
      width: 100%;
      height: 14rem;
      object-fit: cover;
      margin-bottom: 1rem;
    }
    &2,
    &3 {
      width: 45%;
    }
    &4 {
      display: none;
    }
  }
  .button-div {
    width: 12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
  }

  .sponsors {
    width: 100%;
    height: 3rem;
  }

  @media (min-width: 1000px) {
    .header_image {
      width: 40%;

      &1 {
        height: 20rem;
      }

      &2,
      &3,
      &4 {
        width: auto;
        height: 14rem;
        display: inline-block;
      }
    }
  }
`;
