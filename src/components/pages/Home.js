import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../sections/Navbar";
import Meals from "../sections/Meals";
import { Data } from "../Data";
// import background from `../../images/${activeMeal.imgUrl}`

const Home = () => {
  const [activeMeal, setActiveMeal] = useState(Data[0]);
  return (
    <StyledMain
      style={{
        background: ` radial-gradient(50% 50% at 50% 50%, #fbbd05df 0%, #ff8f3fdf 100%), url(/images/${activeMeal.imgUrl}) no-repeat center/cover`,
      }}
    >
      <Navbar />
      <Meals activeMeal={activeMeal} setActiveMeal={setActiveMeal} />
    </StyledMain>
  );
};

export default Home;
const StyledMain = styled.main`
  height: 100vh;
  padding: 20.4px 100px 49.5px;
  position: relative;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;

  .background {
    filter: blur(19px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
