import React from "react";
import { styled } from "styled-components";
import { projectsData } from "data/projectsData";

const ProjectCard = () => {
  return (
    <div>
      {projectsData.map((item) => {
        return (
          <>
            <div>
              <h2>{item.projectName}</h2>
              <a href={item.github}>github</a>
              <a href={item.notion}>notion</a>
              <a href={item.deploy}>deploy</a>
            </div>
            <div>
              <h3>프로젝트 소개</h3>
              <p>{item.projectIntro}</p>
            </div>
            <div>
              <h3>프로젝트 구현 기능</h3>
              {item.myTask.map((item) => {
                return (
                  <>
                    <h4>{item.task}</h4>
                    <p>{item.description}</p>
                  </>
                );
              })}
            </div>
            <div>
              <h3>사용스택</h3>
              {item.useStack.map((item) => {
                return <p>{item}</p>;
              })}
            </div>
            <div>
              <h3>이 스택은 이런 이유로 사용했어요!</h3>
              {item.whyUseStack?.map((item) => {
                return (
                  <>
                    <h4>{item.stack}</h4>
                    {item.reason.map((item) => (
                      <p>{item}</p>
                    ))}
                  </>
                );
              })}
            </div>
            <div>
              <h4>개발하면서 이런 고민들을 했어요</h4>
              {item.posts?.map((item) => {
                return (
                  <p>
                    <a href={item.link}>블로그 포스팅 : {item.title}</a>
                  </p>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProjectCard;
