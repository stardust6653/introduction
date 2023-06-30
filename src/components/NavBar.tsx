import React from "react";
import { styled } from "styled-components";

const menu = [
  { type: "Introduction" },
  { type: "Projects" },
  { type: "Effort" },
  { type: "Stacks" },
  { type: "Outro" },
];

const NavBar = () => {
  return (
    <MenuList>
      {menu.map((item) => (
        <MenuItem key={item.type}>
          <MenuLink href={`#${item.type}`}>{item.type}</MenuLink>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default NavBar;

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;
  margin-left: 2rem;
  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  color: white;
`;
