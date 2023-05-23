import React from "react";
import styled from "styled-components";

const Viewers = () => {
  const vidRef1 = React.useRef();
  const vidRef2 = React.useRef();
  const vidRef3 = React.useRef();
  const vidRef4 = React.useRef();
  const vidRef5 = React.useRef();

  return (
    <Container>
      <Wrap
        onMouseEnter={() => {
          vidRef1.current.currentTime = 0;
          vidRef1.current.play();
        }}
      >
        <img src="/images/viewers-disney.png" alt="" />
        <video ref={vidRef1} loop playsInline>
          <source src="\videos\1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={() => {
          vidRef2.current.currentTime = 0;
          vidRef2.current.play();
        }}
      >
        <img src="/images/viewers-pixar.png" alt="" />
        <video ref={vidRef2} loop playsInline>
          <source src="\videos\1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={() => {
          vidRef3.current.currentTime = 0;
          vidRef3.current.play();
        }}
      >
        <img src="/images/viewers-marvel.png" alt="" />
        <video ref={vidRef3} loop playsInline>
          <source src="\videos\1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={() => {
          vidRef4.current.currentTime = 0;
          vidRef4.current.play();
        }}
      >
        <img src="/images/viewers-starwars.png" alt="" />
        <video ref={vidRef4} loop playsInline>
          <source src="\videos\1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap
        onMouseEnter={() => {
          vidRef5.current.currentTime = 1;
          vidRef5.current.play();
        }}
      >
        <img src="/images/viewers-national.png" alt="" />
        <video ref={vidRef5} loop playsInline>
          <source
            src="\videos\1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 20px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    transition: all 250ms ease;
    border-radius: 8px;
    transform: scaleY(1.02) scale(1.01);
    padding-left: 1px;
    &:hover {
      z-index: 2;
    }
  }
  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
