import React, { useState } from 'react';
import {
  Container,
  FlexContainer,
  H2,
  ImageComponent,
  Text,
} from '../../global/globalStyle';

function Footer() {
  return (
    <>
      <FlexContainer height="50px" align="center" boxShadow="0 3px 32px rgba(0,0,0,.16)" borderTop="1px solid grey">
        <FlexContainer align="center" justify="flex-end" padding="0 20px 0 0">
          <H2 width="fit-content" weight="500" textSize="1.2em"> Made with </H2>
          <ImageComponent width="40px" margin="0 5px" alt="react icon" src="https://img.icons8.com/clouds/100/000000/react.png" />
          <H2 width="fit-content" weight="500" textSize="1.2em"> and </H2>
          <ImageComponent width="50px" alt="heart icon" src="https://img.icons8.com/clouds/100/000000/like--v1.png" />
          <H2 width="fit-content" weight="500" textSize="1.2em"> by Giovani! </H2>
        </FlexContainer>
      </FlexContainer>
    </>

  );
}

export default Footer;
