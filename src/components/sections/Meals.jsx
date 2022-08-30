import React, { useState } from "react";
import styled from "styled-components";
import MealScroll from "../elements/MealScroll";
import { Data } from "../Data";
import { BsArrowRight } from "react-icons/bs";

const Meals = () => {
  const [activeMeal, setactiveMeal] = useState(Data);

  return (
    <StyledSection>
      {/* top part with main image */}
      <div className="meal-top">
        <div className="meal-text">
          <h1 className="meal-text-title">Enjoy Delicious Meals</h1>
          <p className="meal-text-description">
            Meals delivered to your doorstep.
          </p>
        </div>
        <div className="meal-image">
          <img
            src={require("../../images/background.png")}
            alt="back drop"
            className="backdrop-img"
          />
          <img
            src={require(`../../images/${activeMeal[1].imgUrl}`)}
            className="meal-display"
            alt="meal"
          />
        </div>
        <div className="meal-scroll">
          {/* meal-scroll-label */}
          <div className="meal-scroll-label">
            <p>Scroll to see more</p>
            <button className="nav-signup-btn" onClick={""}>
              <img src={require("../../images/arrow.png")} alt="arrow" />
            </button>
          </div>
          <MealScroll data={activeMeal} />
        </div>
      </div>
      <div className="meal-bottom">
        <div className="meal-price">
          <span className="meal-description">PRICE </span> <br />{" "}
          <span>{activeMeal[1].price}</span>
        </div>
        <div className="meal-details">
          <span className="meal-title">{activeMeal[1].title} </span> <br />
          <span>{activeMeal[1].ingredients}</span>
        </div>
        <div className="meal-time">
          <span className="meal-description">Preparation </span> <br />
          <span>{activeMeal[1].time}</span>
        </div>
      </div>
    </StyledSection>
  );
};

export default Meals;
const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* align-items: center; */
  color: #ffffff;

  .meal-top,
  .meal-bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .meal-text {
    width: 30%;
    &-title {
      font-family: "Inter";
      font-weight: 900;
      font-size: 64px;
      line-height: 77px;
      letter-spacing: 0.015em;
    }
    &-description {
      font-family: "Lato";
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.015em;
    }
  }

  .meal-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

    .backdrop-img {
      width: 450px;
      height: 450px;
      opacity: 0.5;
    }

    .meal-display {
      width: 375px;
      height: 375px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .meal-scroll {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30%;

    &-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin-right: -7rem;
      transform: rotate(90deg);

      p {
        font-weight: 800;
        font-size: 12.6px;
        line-height: 26px;
        letter-spacing: 6px;
        text-transform: uppercase;
        color: #fcfcfc;
        white-space: nowrap;
        margin-right: 5rem;
      }

      button {
        border-radius: 10px;
        background: none;
        padding: 2px 4px;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-size: 24px;
        margin-left: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(-90deg);
      }
    }
  }
  .meal-time,
  .meal-price {
    width: 30%;
  }

  .meal-details {
    width: 40%;
    text-align: center;
  }
  .meal-bottom {
    margin-top: 2rem;
  }
  .meal-time {
    text-align: right;
  }
  .meal-description {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .meal-title {
    font-family: "Inter";
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.015em;
  }
`;
