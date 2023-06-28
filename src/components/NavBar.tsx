import React from "react";
import { styled } from "styled-components";

const menu = [{ type: "Intro" }, { type: "Projects" }, { type: "Active" }];

const NavBar = () => {
  return (
    <MenuList>
      {menu.map((item) => (
        <MenuItem key={item.type}>{item.type}</MenuItem>
      ))}
    </MenuList>
  );
};

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;
  margin-left: 2rem;
`;

export default NavBar;
