import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper";
import {Data} from '../Data'
import {  useSwiper } from "swiper/react";

const MealScroll = ({ data, setActiveMeal }) => {
  // const   swiperSlide = useSwiperSlide();
  const swiper = useSwiper();
  return (
    <StyledDiv>
      {/* label */}
      <div className="meal-scroll-label">
        <p>Scroll to see more</p>
        <button className="nav-signup-btn" onClick={() => swiper.slideNext()}>
          <img src={require("../../images/arrow.png")} alt="arrow" />
        </button>
      </div>
      {/* scroll bar */}
      <div className="swiper-div">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={50}
          slidesPerView={3}
          direction={"vertical"}
          initialSlide={0}
          centeredSlides={true}
          onSlideChange={() => setActiveMeal(Data[swiper?.activeIndex])}
          onSwiper={ console.log()}
          longSwipes={false}
          loop={true}
        >
          {console.log(swiper?.activeIndex)}
          {data.map((item, index) => {
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
      </div>
    </StyledDiv>
  );
};

export default MealScroll;
const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* width: 30%; */

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
        padding: 2px 4px;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-size: 24px;
        margin-left: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(-90deg);
      }
    }
  }

  .swiper-div {
    width: 164px;
    height: 508px;
    background: #ffffff;
    box-shadow: 18px 39px 69px 4px rgba(0, 0, 0, 0.25);
    border-radius: 97px;
    padding: 40px 8px;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 95px;
    height: 95px;
    margin: 0 auto;
    /* border: 1px solid red; */

    &-active {
      width: 148px;
      height: 148px;

      /* border: 1px solid red; */
    }
  }
  .inactive-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;
