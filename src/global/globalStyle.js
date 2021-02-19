import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  padding: 70px 0;
  z-index: 1;
  background-color: ${({ color }) => color || 'none'};
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`;

export {
  Container,
  H1,
};
