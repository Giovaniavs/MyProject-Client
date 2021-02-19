import styled from 'styled-components';

interface Props {
  backgroundColor: string,
  boxShadow: string
}

const NavbarContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 10;
  box-shadow: ${(p: Props) => p.boxShadow};
  background-color: ${(p: Props) => p.backgroundColor} ;
  transition: .3s;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  height: 100%;
  margin: 0 30px 0 0;
  padding: 0;
  overflow: hidden;
`;

const NavbarItem = styled.li`
  float: right;
  border-radius: 20px;
  transition: .5s;
  &:hover {
    background-color: #e8e8e8;
    opacity: 0.8;
  }
  &:hover a{
    color: black;
  }
`;

const ItemLink = styled.a`
  display: block;
  color: #909090;
  text-align: center;
  margin: 20px 16px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: .5s;
  `;

const ContainerImage = styled.img`
  height: 50px;
  margin: 3px 0 0 30px;
  cursor: pointer;
`;

export {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  ItemLink,
  ContainerImage,
};
