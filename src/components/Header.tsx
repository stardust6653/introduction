import React from "react";
import { styled } from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderContents>
        <Title>
          <PointText>Soye</PointText> Introduce
        </Title>
        <NavBar />
      </HeaderContents>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #172027;
  color: #fbfbfb;
`;

const HeaderContents = styled.div`
  width: 1280px;
  padding: 1rem 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 30px;
  font-weight: 700;
`;

const PointText = styled.span`
  color: #ffc530;
`;
