import React from 'react';
import { Container, H1 } from '../../global/globalStyle';

// const Container = styled.div`
//   height: 100vh;
//   padding: 70px 0;
//   z-index: 1;

function Home() {
  return (
    <>
      <Container id="Home" zindex={1} height="100vh" padding="70px 0">
        <H1 align="center"> Home </H1>
      </Container>
    </>

  );
}

export default Home;
