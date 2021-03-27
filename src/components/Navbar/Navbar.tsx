/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { HamburgerArrow } from 'react-animated-burgers';

import {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  ItemLink,
  ContainerImage,
  SidebarContainer,
  SidebarItem,
} from './styles';

import MyPageIcon from '../../assets/MyPageIcon.png';

function Navbar() {
  const [backGroundColor, setbackGroundColor] = useState('transparent');
  const [boxShadow, setboxShadow] = useState('none');
  const [navHeight, setNavHeight] = useState('60px');
  const [hamburguerButtonIsActive, setHamburguerButtonIsActive] = useState(false);
  const [isMobile, setisMobile] = useState<boolean>();
  const [isSidebarActive, setIsSidebarActive] = useState('100%');
  const mobileScreen = 720;
  const currentScreen = screen.width;

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

  function toggleButton() {
    if (hamburguerButtonIsActive) {
      setHamburguerButtonIsActive(false);
      setIsSidebarActive('100%');
    } else {
      setHamburguerButtonIsActive(true);
      setIsSidebarActive('0%');
    }
  }

  useEffect(() => {
    if (currentScreen <= mobileScreen) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  }, [currentScreen]);

  return (
    <>
      <NavbarContainer
        backgroundColor={backGroundColor}
        boxShadow={boxShadow}
        height={navHeight}
      >
        <a href="#Home">
          <ContainerImage alt="My page icon" src={MyPageIcon} />
        </a>
        <NavbarList>
          <NavbarItem>
            <ItemLink href="#Projects"> Projects </ItemLink>
          </NavbarItem>
          <NavbarItem>
            <ItemLink href="#Soundtrack"> Soundtrack </ItemLink>
          </NavbarItem>
          <NavbarItem>
            <ItemLink href="#Experiences"> Experiences </ItemLink>
          </NavbarItem>
          <NavbarItem>
            <ItemLink href="#Home"> Home </ItemLink>
          </NavbarItem>
        </NavbarList>
        { isMobile
        && (
          <>
            <HamburgerArrow
              isActive={hamburguerButtonIsActive}
              toggleButton={toggleButton}
              buttonWidth={30}
              buttonStyle={{ zIndex: 11, outline: 'none' }}
            />
            <SidebarContainer transform={isSidebarActive}>
              <SidebarItem onClick={() => { setIsSidebarActive('100%'); setHamburguerButtonIsActive(false); }}>
                <ItemLink href="#Home"> Home </ItemLink>
              </SidebarItem>
              <SidebarItem onClick={() => { setIsSidebarActive('100%'); setHamburguerButtonIsActive(false); }}>
                <ItemLink href="#Experiences"> Experiences </ItemLink>
              </SidebarItem>
              <SidebarItem onClick={() => { setIsSidebarActive('100%'); setHamburguerButtonIsActive(false); }}>
                <ItemLink href="#Soundtrack"> Soundtrack </ItemLink>
              </SidebarItem>
              <SidebarItem onClick={() => { setIsSidebarActive('100%'); setHamburguerButtonIsActive(false); }}>
                <ItemLink href="#Projects"> Projects </ItemLink>
              </SidebarItem>
            </SidebarContainer>
          </>
        )}
      </NavbarContainer>
    </>
  );
}

export default Navbar;
