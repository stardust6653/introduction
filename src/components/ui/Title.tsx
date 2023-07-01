import React from "react";
import { styled } from "styled-components";

type Props = {
  title: string;
  linkName: string;
};

const Title = ({ title, linkName }: Props) => {
  return (
    <div id={linkName}>
      <Text>{title}</Text>
    </div>
  );
};

export default Title;

const Text = styled.h2`
  margin-top: 6rem;
  font-size: 3.5rem;
  @media only screen and (max-width: 680px) {
    margin-top: 3rem;
    font-size: 2.5rem;
  }
`;
