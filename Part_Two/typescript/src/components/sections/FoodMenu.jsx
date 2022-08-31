import React, {useState} from "react";
import styled from "styled-components";
import { Data } from "../Data";
import FoodCard from "../elements/FoodCard";
import img1 from "../../images/logo.png";
import img2 from "../../images/headerimg.png";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const FoodMenu = () => {
  const [data, setdata] = useState(Data)
  return (
    <StyledDiv>
      <div className="service-text">
        <h2 className="section-heading">Food Menu</h2>
      </div>
      <div className="cards">
        {data.map((item, index) => {
          return (
            <FoodCard
              title={item.title}
              imgUrl={item.imgUrl || "newfood.png" }
              ingredients={item.ingredients || data[1].ingredients}
              duration={item.time || data[1].ingredients}
              price={item.price }
              key={index}
            />
          );
        })}
      </div>
      <Link to="/menu">
        <Button label={"Add New Item"} chosenClass={"new-menu"} />
      </Link>
    </StyledDiv>
  );
};

export default FoodMenu;
const StyledDiv = styled.section`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#ffffffdf, #ffffffdf), url(${img1}) no-repeat,
    url(${img2}) no-repeat;
  background-size: 10rem, 10rem;
  background-position: 50% top, 50% bottom;
  width: 100%;

  .section-heading {
    font-weight: 700;
    font-size: 42px;
    line-height: 124%;
  }
  .new-menu {
    margin-top: 1rem;
    width: 167px;
    height: 54px;
    font-size: 16px;
    background: #da3743;
    border-radius: 30px;
  }

  .cards {
    padding: 2rem 1rem;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;
    column-gap: 2rem;
    justify-items: center;
  }
  .service-text {
    max-width: 88%;
  }
`;
