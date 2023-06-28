import React from "react";
import { styled } from "styled-components";

const menu = [{ type: "자기소개" }, { type: "프로젝트" }, { type: "활동" }];

const NavBar = () => {
  return (
    <MenuList>
      {menu.map((item) => (
        <MenuItem>{item.type}</MenuItem>
      ))}
    </MenuList>
  );
};

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  font-size: 1.2rem;
  margin-left: 2rem;
`;

export default NavBar;
