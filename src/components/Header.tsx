import React from "react";
import { styled } from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderContents>
        <Title>Soye</Title>
        <NavBar />
      </HeaderContents>
    </HeaderComponent>
  );
};

const HeaderComponent = styled.div`
  width: 100%;
  background-color: #ffeeb4;
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
  font-size: 40px;
`;

export default Header;
