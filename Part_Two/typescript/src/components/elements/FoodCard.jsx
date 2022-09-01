import React from "react";
import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { menuActions } from "../features/MenuReducer";

const FoodCard = ({ title, imgUrl, duration, price, ingredients }) => {
  const { removeItem } = menuActions;
  const dispatch = useDispatch();

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
        <div className="del-item">
          <span className="del-icon" onClick={()=> dispatch(removeItem(title))}>
            {" "}
            <RiDeleteBinLine />
          </span>
          <span> Delete Item</span>
        </div>
      </div>
    </StyledDiv>
  );
};

export default FoodCard;
const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  width: 100%;
  position: relative;

  .del-item {
    display: none;
    position: absolute;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-color: #f4f7f1d9;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    padding:  2rem;
    color: #da3743;
    font-family: "Inter";
  }
  .del-icon {
    width: 3rem;
    height: 2.8rem;
    border-radius: 50%;
    border: 2px solid #da3743;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  .del-icon:hover{
    transform: scale(1.1);
  }
   &:hover .del-item {
    display: flex;
  }

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
    font-size: 20px;
    line-height: 132%;
    color: #333131;
    width: 100%;
  }
  .card-title {
    font-weight: 700;
    font-size: 24px;
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
    width: 100%;
  }

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    margin-bottom: 10px;
  }
`;
