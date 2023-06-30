import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterLayout>
      Copyright&copy; {year}.SoyePark.All rights reserved.
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
  background-color: #172027;
  padding: 2rem 0;
`;
