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
  margin-bottom: 3rem;
`;

const CardListComponent = styled.div`
  width: 1160px;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
`;
