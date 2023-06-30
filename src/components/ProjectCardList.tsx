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
            <Arrow>Prev</Arrow>
          </ArrowButton>
          <ArrowButton
            onClick={() => {
              setIndexFn("increase");
            }}
          >
            <Arrow>Next</Arrow>
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
  padding-bottom: 6rem;
`;

const ProjectCardComponent = styled.div`
  width: 1160px;
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 1280px) {
    width: 80vw;
  }
  @media only screen and (max-width: 680px) {
    width: 100vw;
  }
`;

const ArrowBtnComponent = styled.div`
  width: 106.4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 42%;
  @media only screen and (max-width: 1280px) {
    top: 96.1%;
  }
  @media only screen and (max-width: 680px) {
    top: 97%;
    width: 70%;
  }
`;

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 241, 241);
  width: 70px;
  height: 70px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 35px;
  font-size: 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:active {
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: rgb(235, 235, 235);
  }
  @media only screen and (max-width: 680px) {
    width: 60px;
    height: 60px;
  }
`;

const Arrow = styled.p`
  color: black;
  font-size: 1rem;
`;
