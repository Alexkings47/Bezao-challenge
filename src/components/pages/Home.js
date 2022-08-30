import React from 'react'
import styled from 'styled-components'
import Navbar from '../sections/Navbar'
import Meals from '../sections/Meals'

const Home = () => {
  return (
    <StyledMain>
      <div className='background'></div>
      <Navbar />  
      <Meals />
    </StyledMain>
  )
}

export default Home
const StyledMain = styled.main`
  background: radial-gradient(#fbbc05, #ff8f3f);
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