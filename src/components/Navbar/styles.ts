import styled from 'styled-components';
import { FlexContainer } from '../../global/globalStyle';

interface Props {
  backgroundColor?: string;
  boxShadow?: string;
  height?: string;
  transform?: string;
}

const NavbarContainer = styled.div<Props>`
  display: flex;
  left: 10%;
  border-radius: 0 0 15px 15px;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: ${(p: Props) => p.height || '60px'};
  position: fixed;
  z-index: 10;
  box-shadow: ${(p: Props) => p.boxShadow};
  background-color: ${(p: Props) => p.backgroundColor} ;
  transition: .5s;
  @media(max-width: 720px) {
    left: 0;
    width: 100%;
    height: 60px;
  }
`;

const NavbarList = styled.ul`
  list-style-type: none;
  height: 100%;
  margin: 0 30px 0 0;
  padding: 0;
  overflow: hidden;
  @media(max-width: 720px) {
    display: none;
  }
`;

const NavbarItem = styled.li`
  float: right;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 10px;
`;

const ItemLink = styled.a`
  display: flex;
  color: #777777;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  padding: 0 10px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: .5s;
  &:hover {
    background-color: #e8e8e8;
    color: black;
    opacity: 0.8;
  }
 `;

const ContainerImage = styled.img`
  height: 50px;
  margin: 5px 0 0 30px;
  cursor: pointer;
  @media(max-width: 720px) {
    width: 35px;
    height: 35px;
    margin: 0 0 0 10px;
  }
`;

const SidebarContainer = styled(FlexContainer)<Props>`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  padding: 60px 0;
  position: fixed;
  right: 0;
  bottom: 0;
  box-shadow: 0 3px 12px rgba(0,0,0,.16);

  transition: 0.5s;
  transform: translateX(${(p: Props) => p.transform});
`;

const SidebarItem = styled(FlexContainer)<Props>`
  height: 10%;
  width: 100%;
  justify-content: center;
  margin: 5px 0;
`;

export {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  ItemLink,
  ContainerImage,
  SidebarContainer,
  SidebarItem,
};
