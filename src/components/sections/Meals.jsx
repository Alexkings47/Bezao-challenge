import React, { useState } from "react";
import styled from "styled-components";
import MealScroll from "../elements/MealScroll";

const Meals = () => {
  const [activeMeal, setactiveMeal] = useState([]);

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
            alt="back drop image"
            className="backdrop-img"
          />
        </div>
        <div className="meal-scroll">
          {/* meal-scroll-label */}
          <div className="meal-scroll-label">
            <div>Scroll to see more</div>
            <button className="nav-signup-btn" onClick={""}>
              &darr;
            </button>
          </div>
         <MealScroll />
        </div>
      </div>
      <div className="meal-bottom">
        <div className="meal-price"></div>
        <div className="meal-details"></div>
        <div className="meal-time"></div>
      </div>
    </StyledSection>
  );
};

export default Meals;
const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: #ffffff;

  .meal-top,
  .meal-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .meal-text {
    &-title {
      font-family: "Inter";
      font-weight: 900;
      font-size: 64px;
      width: 200px;
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
    .backdrop-img {
      width: 450px;
      height: 450px;
      mix-blend-mode: soft-light;
      opacity: 0.5;
    }
  }

  .meal-scroll {
    display: flex;
    justify-content: space-between;
    align-items: center;

   
    &-label {
      height: 500px;
      transform: rotate(-90deg);

      div {
        font-weight: 800;
        font-size: 12.6px;
        line-height: 26px;
        height: 500px;
        letter-spacing: 6px;
        text-transform: uppercase;
        color: #fcfcfc;
      }
      button {
        width: 21px;
        border-radius: 4px;
        background: none;
        height: 46px;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
    }
  }
`;
