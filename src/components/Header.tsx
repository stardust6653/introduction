import React from "react";
import { styled } from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderContents>
        <Title>
          <TitleAnker href="#home">
            <PointText>Soye</PointText> Introduce
          </TitleAnker>
        </Title>
        <NavBar />
      </HeaderContents>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  z-index: 999;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #172027;
  color: #fbfbfb;
`;

const HeaderContents = styled.div`
  width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
  @media only screen and (max-width: 680px) {
    padding: 0;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 30px;
  font-weight: 700;
  @media only screen and (max-width: 680px) {
    font-size: 25px;
  }
`;

const TitleAnker = styled.a`
  color: white;
`;

const PointText = styled.span`
  color: #ffc530;
`;
