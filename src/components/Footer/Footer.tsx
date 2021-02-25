import React from 'react';
import {
  FlexContainer,
  H2,
  ImageComponent,
} from '../../global/globalStyle';

function Footer() {
  return (
    <>
      <FlexContainer height="50px" align="center" boxShadow="0 3px 32px rgba(0,0,0,.16)">
        <FlexContainer justify="flex-start" margin="0 2rem">
          <a href="https://www.instagram.com/giov_albuquerque/">
            <ImageComponent width="40px" margin="0 10px" alt="instagram icon" src="https://img.icons8.com/plasticine/48/000000/instagram.png" />
          </a>
          <a href="https://github.com/Giovaniavs">
            <ImageComponent width="40px" margin="0 10px" alt="instagram icon" src="https://img.icons8.com/plasticine/48/000000/github.png" />
          </a>
          <a href="https://www.linkedin.com/in/giovani-albuquerque-76a6ab1b6/">
            <ImageComponent width="40px" margin="0 10px" alt="instagram icon" src="https://img.icons8.com/plasticine/100/000000/linkedin.png" />
          </a>
        </FlexContainer>

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
