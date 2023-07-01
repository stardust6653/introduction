import React from "react";
import Title from "./ui/Title";
import EffortCard from "./EffortCard";
import { styled } from "styled-components";
import { EffortProps, effortData } from "data/effortData";

const EffortList = () => {
  return (
    <EffortListComponent>
      <Title title={"<Effort/>"} linkName="Effort" />
      <CardListComponent>
        {effortData.map((item: EffortProps) => {
          return <EffortCard post={item} />;
        })}
      </CardListComponent>
    </EffortListComponent>
  );
};

export default EffortList;

const EffortListComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
`;

const CardListComponent = styled.div`
  width: 1160px;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
  @media only screen and (max-width: 1280px) {
    width: 85%;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 680px) {
    padding: 3rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 100%;
  }
`;
