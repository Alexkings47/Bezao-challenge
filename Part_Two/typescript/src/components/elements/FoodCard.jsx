import React from "react";
import styled from "styled-components";

const FoodCard = ({ title, imgUrl, duration, price, ingredients }) => {
  return (
    <StyledDiv>
      <img src={require(`../../images/${imgUrl}`)} alt={title} />
      <div className="time">{duration}</div>
      <div className="card-text">
        <h3 className="card-title">{title}</h3>
        <div className="price">
          <span>₦{price}</span>
        </div>
        <p className="sub-text">{ingredients}</p>
      </div>
    </StyledDiv>
  );
};

export default FoodCard;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  

  .time {
    position: absolute;
    min-width: 4rem;
    height: 3rem;
    top: 0;
    right: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #da3743;
    color: white;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .price {
    font-weight: 500;
    font-size: 24px;
    line-height: 132%;
    color: #333131;
    width: 100%;
  }
  .card-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: #4d4d4d;
  }
  .card-text {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    height: 30%;
  }

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    margin-bottom: 10px;
  }
`;
