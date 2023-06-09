import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  padding-top: 20px; 
  ul li button{
    &:before{
      font-size: 10px;
      color:rgb(150,158,171);
    }
  }

  li.slick-active button::before{
    color: white;
  } 

  button{
    z-index: 1;
  }
  .slick-list{
    overflow: visible;
  }
`;

const Wrap = styled.div`
  img {
    height: 100%;
    width: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    &:hover{
      border:4px solid rgb(255,255,255,0.6)
    }
    &:focus{
      outline-style: none;
    }
  }
`;
