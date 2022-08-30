import React from "react";
import styled from "styled-components";

const MealScroll = ({ data }) => {
  function handleScroll() {
    console.log("Scrolled");
  }
  return (
    <StyledDiv onClick={handleScroll}>
      {data.map((item, index) => {
        return index === 1 ? (
          <img
            className="active-image"
            alt={item.ingredients}
            src={require(`../../images/${item.imgUrl}`)}
          />
        ) : (
          <img
            className="inactive-image"
            alt={item.ingredients}
            src={require(`../../images/${item.imgUrl}`)}
            key={index}
          />
        );
      })}
    </StyledDiv>
  );
};

export default MealScroll;
const StyledDiv = styled.div`
  width: 164px;
  height: 508px;
  background: #ffffff;
  box-shadow: 18px 39px 69px 4px rgba(0, 0, 0, 0.25);
  border-radius: 97px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px 36px;

  .inactive-image {
    width: 92px;
    height: 92px;
    border-radius: 50%;
  }
  .active-image {
    width: 148px;
    height: 148px;
    border-radius: 50%;
  }
`;
