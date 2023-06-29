import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { projectsData } from "data/projectsData";
import Image from "./ui/Image";

type Props = {
  cardIndex: number;
};

const ProjectCard = ({ cardIndex }: Props) => {
  const card = projectsData[cardIndex];
  const imageArr = card.screenshot;
  const [currentImg, setCurrentImg] = useState(imageArr[0]);

  useEffect(() => {
    setCurrentImg(imageArr[0]);
  }, [cardIndex]);

  return (
    <ProjectCardComponent>
      <NameComponent>
        <CardTitle>{card.projectName}</CardTitle>
        <LinkGroup>
          {card.github && (
            <Link href={card.github} target="_blank">
              GITHUB
            </Link>
          )}
          {card.notion && (
            <Link href={card.notion} target="_blank">
              NOTION
            </Link>
          )}
          {card.deploy && (
            <Link href={card.deploy} target="_blank">
              DEPLOY
            </Link>
          )}
        </LinkGroup>

        {
          <>
            <ImageComponent>
              <Image src={currentImg} alt={`${card.projectName} 스크린샷`} />
            </ImageComponent>
            <AnotherImageList>
              {card.screenshot.map((item) => {
                return (
                  <Image
                    src={item}
                    alt={`${card.projectName} 스크린샷`}
                    onClick={setCurrentImg}
                  />
                );
              })}
            </AnotherImageList>
          </>
        }
      </NameComponent>

      <IntroductionComponent>
        <div>
          <ListTitle>프로젝트 소개</ListTitle>
          <Description>{card.projectIntro}</Description>
        </div>

        <div>
          {card.useStack.map((item) => {
            return <UseStack>#{item}</UseStack>;
          })}
        </div>
      </IntroductionComponent>
    </ProjectCardComponent>
  );
};

export default ProjectCard;

const ProjectCardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 1160px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 60px 80px;
  background-color: #f8f8f8;
`;

const NameComponent = styled.div``;

const CardTitle = styled.h2`
  font-family: "Anybody", cursive;
  font-size: 3rem;
  margin-bottom: 1.3rem;
`;

const UseStack = styled.span`
  display: inline-block;
  margin: 0 1rem 1.5rem 0;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

const LinkGroup = styled.div``;

const Link = styled.a`
  text-align: center;
  font-size: 1.3rem;
  margin: 0 30px 20px 0;
  &:hover {
    border-bottom: 2px solid black;
    font-weight: 700;
  }
`;

const ListTitle = styled.h3`
  color: #172027;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const ImageComponent = styled.div`
  width: 100%;
  position: relative;
`;

const AnotherImageList = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-bottom: 2rem;
`;

const IntroductionComponent = styled.div`
  width: 100%;
`;
