import React from "react";
import styled from "styled-components";

const Button = ({ label, color, chosenClass, onClick }) => {
  return (
    <StyledButton color={color} className={chosenClass} >
      {label}
    </StyledButton>
  );
};

export default Button;
const StyledButton = styled.button`
  border-radius: 10px;
  min-width: 5rem;
  padding: 6px 4px;
  text-align: center;
  min-height: 1.5rem;
  border: 2px solid ${(props) => props.color};
  font-weight: 700;
  font-family: "";
  background-color: ${(prop) => (prop.color === "white" ? "" : prop.color)};
  color: white;

  &:focus {
    background-color: #f90d6f;
  }
`;
