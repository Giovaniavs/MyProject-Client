import styled from 'styled-components';
import { FlexContainer } from '../../global/globalStyle';

const FooterContainer = styled(FlexContainer)`
  @media(max-width: 720px) {
    height: 100px;
    flex-direction: column;

    .social-network-icons {
      justify-content: space-evenly;
    }

    .message-footer {
      justify-content: center;
      padding: 0;
      border-top: 1px solid #f2f3f5;
    }

  }
`;

const StyledLink = styled.a`
  height: 60%;
  margin: auto 10px;
`;

export {
  FooterContainer,
  StyledLink,
};
