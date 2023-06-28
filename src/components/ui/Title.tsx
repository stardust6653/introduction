import React from "react";
import { styled } from "styled-components";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <Text>{title}</Text>;
};

export default Title;

const Text = styled.h2`
  margin-top: 4rem;
  font-family: "Anybody", cursive;
  font-size: 4.5rem;
`;
