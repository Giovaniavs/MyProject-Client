import React, { useState } from 'react';

import {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  ItemLink,
  ContainerImage,
} from './styles';

import MyPageIcon from '../../assets/MyPageIcon.png';

function Navbar() {
  const [backGroundColor, setbackGroundColor] = useState('transparent');
  const [boxShadow, setboxShadow] = useState('none');
  const [navHeight, setNavHeight] = useState('60px');

  document.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      setbackGroundColor('transparent');
      setboxShadow('none');
      setNavHeight('60px');
    } else {
      setbackGroundColor('#ffffff');
      setboxShadow('0 3px 12px rgba(0,0,0,.16)');
      setNavHeight('80px');
    }
  });

  return (
    <>
      <NavbarContainer backgroundColor={backGroundColor} boxShadow={boxShadow} height={navHeight}>
        <a href="#Home">
          <ContainerImage alt="My page icon" src={MyPageIcon} />
        </a>
        <NavbarList>
          <NavbarItem>
            <ItemLink href="#Projects"> Projects </ItemLink>
          </NavbarItem>
          <NavbarItem>
            <ItemLink href="#Experiences"> Experiences </ItemLink>
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
