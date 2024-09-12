import React from 'react';
import {
  FlexContainer,
  H2,
  ImageComponent,
} from '../../global/globalStyle';

import { FooterContainer, StyledLink } from './styles';

function Footer() {
  return (
    <>
      <FooterContainer height="50px" align="center" boxShadow="0 3px 32px rgba(0,0,0,.16)">
        <FlexContainer className="social-network-icons" justify="flex-start" margin="0 2rem">
          <StyledLink href="https://github.com/Giovaniavs" target="_blank">
            <ImageComponent width="32px" alt="github icon" src="https://img.icons8.com/ios/50/000000/github.png" />
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/giovani-albuquerque-76a6ab1b6/" target="_blank">
            <ImageComponent width="35px" alt="linkedin icon" src="https://img.icons8.com/ios/50/000000/linkedin.png" />
          </StyledLink>
          <StyledLink href="https://gavs2.medium.com/" target="_blank">
            <ImageComponent width="35px" alt="medium icon" src="https://img.icons8.com/ios/50/000000/medium-monogram--v1.png" />
          </StyledLink>
        </FlexContainer>

        <FlexContainer className="message-footer" align="center" justify="flex-end" padding="0 20px 0 0">
          <H2 width="fit-content" weight="500" textSize="1.2em"> Made with </H2>
          <ImageComponent width="30px" height="30px" margin="0 5px" alt="react icon" src="https://img.icons8.com/ultraviolet/40/000000/react.png" />
          <H2 width="fit-content" weight="500" textSize="1.2em"> by Giovani Albuquerque</H2>
        </FlexContainer>
      </FooterContainer>
    </>

  );
}

export default Footer;
