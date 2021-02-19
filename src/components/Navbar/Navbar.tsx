import React from 'react';
import {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  ItemLink,
  ContainerImage,
} from './styles';
import { H1 } from '../../global/globalStyle';

import MyPageIcon from '../../assets/MyPageIcon.png';

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <a href="#Home">
          <ContainerImage alt="My page icon" src={MyPageIcon} />
        </a>
        <NavbarList>
          <NavbarItem>
            <ItemLink href="#Projects"> Projects </ItemLink>
          </NavbarItem>
          <NavbarItem>
            <ItemLink href="#Presentation"> Presentation </ItemLink>
          </NavbarItem>
          <NavbarItem>
            <ItemLink href="#Home"> Home </ItemLink>
          </NavbarItem>
        </NavbarList>
      </NavbarContainer>
    </>

  );
}

export default Navbar;
