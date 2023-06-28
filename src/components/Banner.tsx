import React from "react";
import { styled } from "styled-components";
import banner from "../images/banner.png";

const Banner = () => {
  return (
    <BannerComponent>
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
`;

const TextBox = styled.div`
  margin-top: 100px;
  width: 800px;
`;

const Text = styled.p`
  font-size: 60px;
  color: #fbfbfb;
  font-family: "Anybody", cursive;
  margin-bottom: 3rem;
`;

const TextEn = styled.p`
  font-size: 60px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  position: absolute;
  bottom: 100px;
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
`;
