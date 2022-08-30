import React, { useState } from "react";
import styled from "styled-components";

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
            aba
        </div>
        <div className="meal-scroll">
          <div className="meal-scroll-label">
            <span>Scroll to see more</span>
            <button className="nav-signup-btn" onClick={""}>
              &8595;
            </button>
          </div>
          <div className="meal-scroll-select"></div>
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

  .meal-top {
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

  .meal-scroll {
    width: 164px;
    height: 508px;
    background: #ffffff;
    box-shadow: 18px 39px 69px 4px rgba(0, 0, 0, 0.25);
    border-radius: 97px;

    span {
      font-weight: 800;
      font-size: 12.6px;
      line-height: 26px;
      letter-spacing: 6px;
      text-transform: uppercase;
      color: #fcfcfc;
      transform: rotate(90deg);
    }
  }
  button {
    width: 21px;
    border-radius: 4px;
    height: 46px;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;
