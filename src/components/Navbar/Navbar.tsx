import React, { useState } from 'react';
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
  const [backGroundColor, setbackGroundColor] = useState('transparent');
  const [boxShadow, setboxShadow] = useState('none');
  window.onscroll = scroll;
  function scroll() {
    if (window.scrollY === 0) {
      setbackGroundColor('transparent');
      setboxShadow('none');
    } else {
      setbackGroundColor('#ffffff');
      setboxShadow('0 3px 12px rgba(0,0,0,.16)');
    }
  }
  return (
    <>
      <NavbarContainer backgroundColor={backGroundColor} boxShadow={boxShadow}>
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
