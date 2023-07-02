import React from "react";
import { styled } from "styled-components";
import banner from "../images/banner.webp";

const Banner = () => {
  return (
    <BannerComponent id="home">
      <TextBox>
        <TextLeft>도서관을 만들고 싶은</TextLeft>
        <TextRight>
          FE개발자 <TextPoint>박소예</TextPoint>입니다.
        </TextRight>
      </TextBox>
      <TextEn>Looking For A Job!</TextEn>
    </BannerComponent>
  );
};

export default Banner;

const BannerComponent = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #0d1217;
  background: url(${banner});
  background-size: cover;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 680px) {
    height: 400px;
  }
`;

const TextBox = styled.div`
  font-size: 60px;
  margin-top: 180px;
  width: 800px;
  @media only screen and (max-width: 1280px) {
    width: 80%;
    text-align: center;
  }
  @media only screen and (max-width: 900px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 680px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 530px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  color: #fbfbfb;
  margin-bottom: 3rem;
`;

const TextEn = styled.p`
  font-size: 50px;
  color: rgba(255, 255, 255, 0.3);
  font-weight: 600;
  position: absolute;
  bottom: 100px;
  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

const TextLeft = styled(Text)`
  text-align: left;
`;

const TextRight = styled(Text)`
  text-align: right;
`;

const TextPoint = styled.span`
  font-size: 70px;
  color: #ffc530;
  font-weight: 600;

  @media only screen and (max-width: 900px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 680px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 530px) {
    font-size: 30px;
  }
`;
