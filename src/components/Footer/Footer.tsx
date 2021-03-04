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
          <StyledLink href="https://www.instagram.com/giov_albuquerque/" target="_blank">
            <ImageComponent width="35px" alt="instagram icon" src="https://img.icons8.com/wired/64/000000/instagram-new.png" />
          </StyledLink>
          <StyledLink href="https://github.com/Giovaniavs" target="_blank">
            <ImageComponent width="32px" alt="github icon" src="https://img.icons8.com/ios/50/000000/github.png" />
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/giovani-albuquerque-76a6ab1b6/" target="_blank">
            <ImageComponent width="35px" alt="linkedin icon" src="https://img.icons8.com/wired/64/000000/linkedin.png" />
          </StyledLink>
        </FlexContainer>

        <FlexContainer className="message-footer" align="center" justify="flex-end" padding="0 20px 0 0">
          <H2 width="fit-content" weight="500" textSize="1.2em"> Made with </H2>
          <ImageComponent width="30px" height="30px" margin="0 5px" alt="react icon" src="https://img.icons8.com/ultraviolet/40/000000/react.png" />
          <H2 width="fit-content" weight="500" textSize="1.2em"> and </H2>
          <ImageComponent width="40px" height="40px" margin="0 5px" alt="study icon" src="https://img.icons8.com/carbon-copy/100/000000/saving-book.png" />
          <H2 width="fit-content" weight="500" textSize="1.2em"> by Giovani </H2>
        </FlexContainer>
      </FooterContainer>
    </>

  );
}

export default Footer;
