import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 10;
  background-color: #ffffff ;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const NavbarItem = styled.li`
  float: right;
`;

const ItemLink = styled.a`
  display: block;
  color: black;
  text-align: center;
  margin: 20px 16px;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: .5s;
  &:hover {
    color: #2de64c;
  }
  `;

const ContainerImage = styled.img`
  height: 50px;
  margin: 3px 0 0 15px;
  cursor: pointer;
`;

export {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  ItemLink,
  ContainerImage,
};
