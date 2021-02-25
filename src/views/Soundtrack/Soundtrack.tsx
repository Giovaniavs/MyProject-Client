import React from 'react';
import {
  Container,
  FlexContainer,
  H1,
  Text,
} from '../../global/globalStyle';

function Soundtrack() {
  return (
    <>
      <Container id="Soundtrack" zindex={1} height="80vh" backgroundColor="#e4e4e4">
        <H1 width="70%" borderTop="1px solid #aaaaaa" align="center" padding="4rem 0 0" margin="3rem auto 0"> Soudtrack! </H1>
        <Text align="center" margin="1rem 0 5rem"> Stop and enjoy some good music! </Text>
        <FlexContainer backgroundColor="inhierit" justify="space-evenly" align="flex-start">
          <iframe title="My Metal Soundtrack" src="https://open.spotify.com/embed/playlist/4cQP3f5RJl0vSZa4AKOs66" style={{ borderRadius: '20px', boxShadow: '0 28px 48px rgba(0,0,0,.16)' }} width="300" height="380" frameBorder="0" allow="encrypted-media" />
          <iframe title="My Rock Soundtrack" src="https://open.spotify.com/embed/playlist/4gb80lzNzGX6GpjR3GAoqt" style={{ borderRadius: '20px', boxShadow: '0 28px 48px rgba(0,0,0,.16)' }} width="300" height="380" frameBorder="0" allow="encrypted-media" />
          <iframe title="My Rap Soundtrack" src="https://open.spotify.com/embed/playlist/2zXuk6iMSi5d8sTyR4cXWI" style={{ borderRadius: '20px', boxShadow: '0 28px 48px rgba(0,0,0,.16)' }} width="300" height="380" frameBorder="0" allow="encrypted-media" />
        </FlexContainer>
      </Container>

    </>

  );
}

export default Soundtrack;
