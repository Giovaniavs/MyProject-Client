import styled from 'styled-components';

interface Props {
  backGroundColor: string
}

const Container = styled.div<Props>`
  height: 100vh;
  z-index: 1;
  background-color: ${(p: Props) => p.backGroundColor};
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 20px 0 0 0;
`;

export {
  Container,
  H1,
};
