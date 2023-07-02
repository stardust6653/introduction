import React from "react";
import Title from "./ui/Title";
import { styled } from "styled-components";

import react from "../images/stackIcons/React.webp";
import next from "../images/stackIcons/Next.js.webp";
import styledComponents from "../images/stackIcons/styled-components.webp";
import javascript from "../images/stackIcons/javascript.webp";
import typescript from "../images/stackIcons/typescript.webp";
import firebase from "../images/stackIcons/firebase.webp";
import recoil from "../images/stackIcons/recoil.webp";
import redux from "../images/stackIcons/redux.webp";
import scss from "../images/stackIcons/scss.webp";
import reduxToolkit from "../images/stackIcons/redux-toolkit.webp";

type Props = {
  name: string;
  src: string;
};

const Stack = () => {
  const availableStack: Props[] = [
    { name: "Javascript", src: javascript },
    { name: "Typescript", src: typescript },
    { name: "React.js", src: react },
    { name: "Next.js", src: next },
    { name: "Styled-Components", src: styledComponents },
    { name: "SCSS", src: scss },
    { name: "Recoil", src: recoil },
    { name: "Redux", src: redux },
    { name: "Redux-Toolkit", src: reduxToolkit },
    { name: "Firebase", src: firebase },
  ];

  return (
    <StackLayout>
      <Title title={"<Stacks/>"} linkName="Stacks" />
      <Stacks>
        {availableStack.map((item) => (
          <>
            <StackItem>
              <StackImage src={item.src} alt={item.name} />
              <StackName>{item.name}</StackName>
            </StackItem>
          </>
        ))}
      </Stacks>
    </StackLayout>
  );
};

export default Stack;

const StackLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fafafa;
  padding-bottom: 6rem;
`;

const Stacks = styled.div`
  width: 1160px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
  @media only screen and (max-width: 1280px) {
    width: 80vw;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 680px) {
    width: 90vw;
  }
`;

const StackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StackName = styled.p`
  margin-top: 1rem;
  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

const StackImage = styled.img`
  height: 100px;
  @media only screen and (max-width: 680px) {
    height: 80px;
  }
`;
