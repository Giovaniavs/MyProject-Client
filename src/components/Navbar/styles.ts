import styled from 'styled-components';

interface Props {
  backgroundColor?: string,
  boxShadow?: string,
  height?: string
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
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 10px;
`;

const ItemLink = styled.a`
  display: flex;
  color: #909090;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  height: 80%;
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
  margin: 0 0 0 30px;
  cursor: pointer;
`;

export {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  ItemLink,
  ContainerImage,
};
