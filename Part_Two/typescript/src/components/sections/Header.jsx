import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header_text">
        <h2 className="header_text--title">
          Delicious meals at your convenience{" "}
        </h2>
        <p className="header_text--desc">
          Order your meals from us and we will have it delivered at your
          doorstep.
        </p>
      </div>
      <div className="header_image">
        <img
          className="header_image1"
          alt="header_image1"
          src={require("../../images/headerimg.png")}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  .header_text {
    width: 45%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    padding: 2rem 0;

    &--title {
      font-size: 45px;
      margin-bottom: 1rem;
      font-family: "Inter";
    }
    &--desc {
      font-size: 18px;
    }
  }

  .header_image {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    &1 {
      width: 100%;
    }

    &1:hover {
      transform: scale(1.05);
    }
  }

  @media (min-width: 1000px) {
    .header_image {
      width: 40%;

      /* &1 {
        height: 20rem;
      } */
    }
  }
`;
