import React from "react";
import { styled } from "styled-components";

type Props = {
  text: string;
};

const PointLine = ({ text }: Props) => {
  return <Line>{text}</Line>;
};

const Line = styled.div`
  width: 100vw;
  height: 79px;
  background-color: #320202;
  overflow: hidden;
`;

export default PointLine;
