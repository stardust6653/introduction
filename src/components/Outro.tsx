import React from "react";
import { styled } from "styled-components";
import Title from "./ui/Title";

const Outro = () => {
  return (
    <OutroLayout>
      <Title title={"<Outro/>"} linkName="Outro" />
      <TextBox>
        <TextGroup>
          <TitleText>당신은 왜 FE개발자가 되었나요?</TitleText>
          <Text>
            고객센터에서 근무하던 중 UX/UI와 관련된 클레임을 많이 겪었습니다.
            <br />
            굉장히 사소한 것부터 서비스 사용에 큰 지장을 주는 크리티컬한
            이슈까지 굉장히 많은 민원을 받아보았는데
            <br />
            <br /> '그런 민원을 주체적으로 해결할 수 있는 존재가 개발자구나.'
            <br />
            '고객의 서비스 충성도와 맞닿아 있는 분야구나'
            <br />
            <br />
            하는 생각이 들었습니다. <br />
            <br />
            이러한 고객센터에서의 경험은 저를 웹개발자의 꿈을 꾸게 하기에 충분한
            원동력이었습니다.
          </Text>
        </TextGroup>
        <TextGroup>
          <TitleText>당신의 개발자로서의 포부는?</TitleText>
          <Text>
            한 프로젝트의 개발자로서 일하지만, 고객의 입장에서도 생각하겠습니다.
            <br />
            그렇게 한명의 개발자로서 많은 사람들이 더 나은 서비스를 사용할 수
            있도록, 더 단단한 프로덕트를 만들어낼 수 있도록 공부하고
            개발하겠습니다.
            <br />
            포트폴리오를 읽어주셔서 감사드립니다.
          </Text>
        </TextGroup>
      </TextBox>
    </OutroLayout>
  );
};

export default Outro;

const OutroLayout = styled.section`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  @media only screen and (max-width: 680px) {
    padding: 0;
  }
`;

const TextBox = styled.div`
  padding: 3rem;
  margin: 3rem 0 5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media only screen and (max-width: 680px) {
    border-radius: 0;
  }
`;

const TextGroup = styled.div`
  &:first-child {
    margin-bottom: 3rem;
  }
`;

const TitleText = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  @media only screen and (max-width: 680px) {
    line-height: 2rem;
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  line-height: 1.4rem;
`;
