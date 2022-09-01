import React,{useEffect} from "react";
import styled from "styled-components";
import MealScroll from "../elements/MealScroll";
import { CSSTransition } from "react-transition-group";

const Meals = ({ activeMeal, setActiveMeal }) => {
  useEffect(() => {
    const collection = document.getElementsByClassName("transit");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.animation =
        "move 4s ease-out 2s infinite backwards";
    }
    return () => {
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.animation = "";
      }
    };
  }, [activeMeal]);

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
          <CSSTransition in={true} timeout={2000} classNames="transit">
            <img
              src={require(`../../images/${activeMeal?.imgUrl}`)}
              className="meal-display"
              alt="meal"
            />
          </CSSTransition>
        </div>

        <MealScroll setActiveMeal={setActiveMeal} />
      </div>
      <div className="meal-bottom">
        <div className="meal-price">
          <span className="meal-description">PRICE </span> <br />{" "}
          <span className="meal-title transit-text">N{activeMeal?.price}</span>
        </div>
        <div className="meal-details">
          <span
            className="meal-title transit-text"
            style={{ fontFamily: "Inter" }}
          >
            {activeMeal?.title}{" "}
          </span>{" "}
          <br />
          <span className="meal-ingredients transit-text">
            {activeMeal?.ingredients}
          </span>
        </div>
        <div className="meal-time">
          <span className="meal-description" style={{ letterSpacing: "2px" }}>
            Preparation
          </span>{" "}
          <br />
          <span className="meal-title transit-text">{activeMeal?.time}</span>
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

  

  .transit {
    animation: move 1.5s ease-out 1s infinite alternate backwards;
  }

  @keyframes move {
    0% {
      opacity: 0.7;
      filter: blur(5px);
    }
    80% {
      opacity: 0.9;
      filter: blur(1px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  .transit-text {
    animation: switch 2.4s ease-out 1s infinite alternate forwards;
  }

  @keyframes switch {
    0% {
      opacity: 0.7;
    }
    80% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
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
