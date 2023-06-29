import React, { useState } from "react";
import { styled } from "styled-components";
import Title from "./ui/Title";
import ProjectCard from "./ProjectCard";
import { projectsData } from "data/projectsData";

const ProjectCardList = () => {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const setIndexFn = (type: string) => {
    if (type === "increase") {
      if (cardIndex >= projectsData.length - 1) {
        setCardIndex(0);
      } else {
        setCardIndex(cardIndex + 1);
      }
    } else if (type === "decrease") {
      if (cardIndex <= 0) {
        setCardIndex(projectsData.length - 1);
      } else {
        setCardIndex(cardIndex - 1);
      }
    }
  };

  return (
    <ProjectCardListComponent>
      <Title title={"<Projects/>"} linkName="Projects" />

      <ProjectCardComponent>
        <ProjectCard cardIndex={cardIndex} />
        <ArrowBtnComponent>
          <ArrowButton
            onClick={() => {
              setIndexFn("decrease");
            }}
          >
            <Arrow>←</Arrow>
          </ArrowButton>
          <ArrowButton
            onClick={() => {
              setIndexFn("increase");
            }}
          >
            <Arrow>→</Arrow>
          </ArrowButton>
        </ArrowBtnComponent>
      </ProjectCardComponent>
    </ProjectCardListComponent>
  );
};

export default ProjectCardList;

const ProjectCardListComponent = styled.section`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
`;

const ProjectCardComponent = styled.div`
  width: 1160px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ArrowBtnComponent = styled.div`
  width: 107%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 42%;
`;

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(244, 244, 244);
  width: 80px;
  height: 80px;
  border-radius: 100%;
  font-size: 40px;
`;

const Arrow = styled.p`
  margin-bottom: 4px;
`;
