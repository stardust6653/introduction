import React, { useState } from "react";
import { styled } from "styled-components";
import profile from "../images/profile-photo.png";
import { useInterval } from "hooks/useInterval";
import NameSpaceIcon from "./ui/icons/NameSpaceIcon";
import BirthIcon from "./ui/icons/BirthIcon";
import AddressIcon from "./ui/icons/AddressIcon";
import MailIcon from "./ui/icons/MailIcon";
import BlogIcon from "./ui/icons/BlogIcon";
import GithubIcon from "./ui/icons/GithubIcon";
import Title from "./ui/Title";

type Props = {
  icon: any;
  text: string;
  mail?: string;
  link?: string;
};

const availableStack: string[] = [
  "React.js",
  "Next.js",
  "Styled-Components",
  "Javascript",
  "Typescript",
  "Firebase",
  "Recoil",
  "Redux",
  "SCSS",
  "Redux-Toolkit",
];

const InfoArr = [
  { icon: <NameSpaceIcon />, text: "박소예" },
  { icon: <BirthIcon />, text: "1993/09/16" },
  { icon: <AddressIcon />, text: "서울시 영등포구" },
  { icon: <MailIcon />, text: "메일보내기", mail: "stardust6653@gmail.com" },
  {
    icon: <BlogIcon />,
    text: "블로그 바로가기",
    link: "https://soyeah-log.vercel.app/",
  },
  {
    icon: <GithubIcon />,
    text: "깃헙 바로가기",
    link: "https://github.com/stardust6653",
  },
];

const viewInfo = (item: Props) => {
  if (item.link) {
    return (
      <>
        <InfoItemAnker href={item.link} target="_blank">
          <InfoType>{item.icon}</InfoType>
          {item.text}
        </InfoItemAnker>
      </>
    );
  } else if (item.mail) {
    return (
      <>
        <InfoItemAnker href={`mailto:${item.mail}`}>
          <InfoType>{item.icon}</InfoType>
          {item.text}
        </InfoItemAnker>
      </>
    );
  } else {
    return (
      <>
        <InfoType>{item.icon}</InfoType>
        <p>{item.text}</p>
      </>
    );
  }
};

const Introduce = () => {
  const [num, setNum] = useState(0);

  useInterval(() => {
    if (num < 9) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  }, 1000);

  return (
    <IntroduceLayout>
      <Title title={"<Introduction/>"} linkName="Introduction" />
      <IntroTextGroup>
        <IntroText>정리하며 발전하는 "Develop"er</IntroText>
        <IntroText>
          공부와 경험의 내용을 꼼꼼히 기록해 어제보다 나은 개발자가 되려고
          합니다
        </IntroText>
        <IntroText>
          <IntroTextPoint>{availableStack[num]}</IntroTextPoint>
          <br />를 활용하는 FE개발자, 박소예입니다.
        </IntroText>
      </IntroTextGroup>
      <ProfileImage src={profile} alt="프로필 이미지" />
      <InfoBoxGroup>
        {InfoArr.map((item) => {
          return <InfoBox>{viewInfo(item)}</InfoBox>;
        })}
      </InfoBoxGroup>
    </IntroduceLayout>
  );
};

export default Introduce;

const IntroduceLayout = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6rem;
`;

const IntroTextGroup = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
  width: 50%;
  padding: 50px;
`;

const IntroText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const IntroTextPoint = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  display: inline-block;
  font-size: 60px;
  font-weight: 700;
  color: #ffc530;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 303px;
  height: 394px;
  border: 1px solid rgba(0, 0, 0, 0.5);

  border-radius: 10px;
`;

const InfoBoxGroup = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 2.5rem;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

const InfoType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const InfoItemAnker = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
