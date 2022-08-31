import React, { useState, useRef } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import styled from "styled-components";
import img1 from "../images/headerimg.png";

const Menu = () => {
  const [profile, setProfile] = useState({
    title: "",
    duration: "",
    price: "",
    ingredients: "",
  });

  const formRef = useRef(null);
  function addMenu() {}

  return (
    <StyledSection>
      <h2 className="section-heading">Add Details Of New Food Menu Item</h2>
      <form ref={formRef} onSubmit={addMenu} className="field">
        <div className="input-field">
          <span className="icon-left">
            <FiMail />
          </span>
          <input
            required={true}
            type="text"
            value={profile.title}
            onChange={(evt) => {
              setProfile({ ...profile, title: evt.target.value });
            }}
            placeholder="Name of Meal"
          />
          <span className="icon-right">
            <AiOutlineCheck />
          </span>
        </div>
        <div className="input-field">
          <span className="icon-left">
            <FiMail />
          </span>
          <input
            required={true}
            type="number"
            minLength={3}
            value={profile.price}
            onChange={(evt) => {
              setProfile({ ...profile, price: evt.target.value });
            }}
            placeholder="Price"
          />
          <span className="icon-right">
            <AiOutlineCheck />
          </span>
        </div>
        <div className="input-field">
          <span className="icon-left">
            <FiMail />
          </span>
          <input
            value={profile.duration}
            type="text"
            onChange={(evt) => {
              setProfile({ ...profile, duration: evt.target.value });
            }}
            placeholder="duration in mins"
          />
          <span className="icon-right">
            <AiOutlineCheck />
          </span>
        </div>
        <div className="input-field">
          <textarea
            value={profile.ingredients}
            minLength={8}
            onChange={(evt) => {
              setProfile({ ...profile, ingredients: evt.target.value });
            }}
            placeholder="dressing"
          />
          <span className="icon-right">
            <AiOutlineCheck />
          </span>
        </div>
        <button className="add-btn" type="submit">
          Add Item
        </button>
      </form>
    </StyledSection>
  );
};

export default Menu;
const StyledSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  height: 100vh;
  background: linear-gradient(#0a2640c2, #0a2640c2),
    url(${img1}) no-repeat center/ cover;

  .section-heading {
    color: white;
    margin-bottom: 4rem;
  }
  .add-btn {
    margin-top: 1rem;
    width: 167px;
    height: 54px;
    font-size: 18px;
    font-weight: 700;
    background: #da3743;
    border-radius: 30px;
    color: white;
  }
  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    min-width: 15rem;
  }
  .input-field {
    display: flex;
    width: 100%;
    margin-bottom: 1.5rem;
    position: relative;

    input,
    textarea {
      padding: 1rem;
      text-indent: 1.5rem;
      width: 100%;
      border: none;
      border-bottom: 1px solid grey;
      font-size: 16px;
    }
    .icon-left,
    .icon-right {
      position: absolute;
      align-items: center;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
      color: purple;
      left: 5px;
    }

    .icon-right {
      right: 5px;
      left: initial;
    }
  }
`;
