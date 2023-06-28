import React from "react";
import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
};

const CenterAlignment = ({ children }: Props) => {
  return <Alignment>{children}</Alignment>;
};

export default CenterAlignment;

const Alignment = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
