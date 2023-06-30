import React from "react";
import { styled } from "styled-components";

type Props = {
  src: string | undefined;
  alt: string;
  onClick?: (src: string) => void;
};

const Image = ({ src, alt, onClick }: Props) => {
  return (
    <ImageComponent
      src={src}
      alt={alt}
      onClick={() => {
        if (src) {
          onClick?.(src);
        }
      }}
    />
  );
};

export default Image;

const ImageComponent = styled.img`
  margin-top: 2rem;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  @media only screen and (max-width: 860px) {
    margin-top: 1.2rem;
  }
`;
