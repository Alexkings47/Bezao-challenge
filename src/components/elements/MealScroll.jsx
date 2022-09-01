import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper";
import { Data } from "../Data";

const MealScroll = ({ setActiveMeal }) => {
  const swiper = document.querySelector(".swiper")?.swiper;
  return (
    <StyledDiv>
      <div className="meal-scroll-label">
        <p>Scroll to see more</p>
        <button className="nav-signup-btn" onClick={() => swiper?.slideNext()}>
          <img src={require("../../images/arrow.png")} alt="arrow" />
        </button>
      </div>
      {/* scroll bar */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={3}
          initialSlide={0}
          speed={500}
          direction={"vertical"}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveMeal(Data[swiper.realIndex])}
          longSwipes={false}
          loop={true}
        >
          {Data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="inactive-image"
                  alt={item.title}
                  src={require(`../../images/${item.imgUrl}`)}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
    </StyledDiv>
  );
};

export default MealScroll;
const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;

  .meal-scroll {
    &-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin-right: -7rem;
      transform: rotate(90deg);

      p {
        font-weight: 800;
        font-size: 12.6px;
        line-height: 26px;
        letter-spacing: 6px;
        text-transform: uppercase;
        color: #fcfcfc;
        white-space: nowrap;
        margin-right: 5rem;
      }

      button {
        border-radius: 10px;
        background: none;

        border: 1px solid rgba(255, 255, 255, 0.5);
        /* margin-left: 1rem; */
        display: flex;
        width: 21px;
        height: 46px;
        justify-content: center;
        align-items: center;
        transform: rotate(-90deg);
      }
    }
  }

  
  .swiper {
    width: 164px;
    height: 508px;
    background: #ffffff;
    box-shadow: 18px 39px 69px 4px rgba(0, 0, 0, 0.25);
    border-radius: 97px;
    padding: 10px 8px;
  }
  .swiper-slide {
    width: 95px;
    height: 95px;
    margin: 0 auto;
    padding: 40px 0;

    &-active {
      width: 148px;
      height: 148px;
      margin-top: -2rem;
    }
  }
  .inactive-image {
    width: 100%;
    border-radius: 50%;
  }
`;
