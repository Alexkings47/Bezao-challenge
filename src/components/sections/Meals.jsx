import React from "react";
import styled from "styled-components";
import MealScroll from "../elements/MealScroll";


const Meals = ({activeMeal, setActiveMeal}) => {
  

  return (
    <StyledSection className="container">
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
            src={require(`../../images/${activeMeal?.imgUrl}`)}
            className="meal-display transit"
            alt="meal"
          />
        </div>

        <MealScroll  setActiveMeal={setActiveMeal} />
      </div>
      <div className="meal-bottom">
        <div className="meal-price">
          <span className="meal-description">PRICE </span> <br />{" "}
          <span className="meal-title transit">N{activeMeal?.price}</span>
        </div>
        <div className="meal-details">
          <span className="meal-title transit" style={{ fontFamily: "Inter" }}>
            {activeMeal?.title}{" "}
          </span>{" "}
          <br />
          <span className="meal-ingredients transit">{activeMeal?.ingredients}</span>
        </div>
        <div className="meal-time">
          <span className="meal-description" style={{ letterSpacing: "2px" }}>
            Preparation
          </span>{" "}
          <br />
          <span className="meal-title transit">{activeMeal?.time}</span>
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
  color: #ffffff;

  .transit{
    transition: all 0.5s;
  }

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
      width: 550px;
      height: 550px;
      mix-blend-mode: soft-light;
      opacity: 0.5;
    }

    .meal-display {
      width: 450px;
      height: 450px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.015em;
    font-family: "Lato";
  }
  .meal-ingredients {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.015em;
  }
`;
