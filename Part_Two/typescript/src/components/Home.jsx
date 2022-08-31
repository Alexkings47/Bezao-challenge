import React from "react";
import NavBar from "./sections/NavBar";
import Header from "./sections/Header";
import styled from "styled-components"
import FoodMenu from "./sections/FoodMenu";

const Home = () => {
  return (
    <StyledMain>
      <NavBar />
      <Header />
      <FoodMenu />
    </StyledMain>
  );
};

export default Home;
const StyledMain = styled.main`
`
