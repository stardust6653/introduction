import { EffortProps } from "data/effortData";
import React from "react";
import { styled } from "styled-components";

type Props = {
  post: EffortProps;
};

const ActiveCard = ({ post }: Props) => {
  return (
    <>
      <ActiveCardComponent key={post.title}>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </ActiveCardComponent>
    </>
  );
};

export default ActiveCard;

const ActiveCardComponent = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  padding: 3rem;
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  line-height: 1.4rem;
  text-align: justify;
`;
