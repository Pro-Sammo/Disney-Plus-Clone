import { signInWithPopup, signOut } from "firebase/auth";
import React,{useEffect} from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
     auth.onAuthStateChanged(async (user)=>{
      if(user){
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("./")
      }
     })
  },[])

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("./");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signout = () => {
    signOut(auth, provider)
      .then(() => {
        dispatch(setSignOut());
        navigate("./login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavManu>
            <a href="/">
              <img src="./images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
            <a href="/">
              <img src="./images/search-icon.svg" alt="" />
              <span>SREACH</span>
            </a>
            <a href="/">
              <img src="./images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img src="./images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="/">
              <img src="./images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
            <a href="/">
              <img src="./images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavManu>
          {userPhoto && (
            <>
              <UserImg onClick={signout} src={userPhoto} />
            </>
          )}
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavManu = styled.div`
  display: flex;
  flex: 1;
  padding-left: 30px;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    color: whitesmoke;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.3px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3 ease;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
