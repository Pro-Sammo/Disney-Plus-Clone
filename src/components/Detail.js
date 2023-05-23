import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const findMovie = async () => {
      const docRef = doc(db, "movies", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setMovie(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    findMovie();
  }, []);

  console.log(movie);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt="" />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />{" "}
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Discription>{movie.description}</Discription>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  margin-top: 100px;
  height: calc(100vh-70px);
  padding: 0 calc(3.5vw+5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-width: 200px;
  min-height: 170px;
  margin-left: 2rem;
  img {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-right: 22px;
  padding: 0 24px;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  span {
    color: whitesmoke;
  }
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  span {
    color: white;
    font-size: 26px;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  margin-left: 2rem;
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Discription = styled(SubTitle)`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 680px;
`;
