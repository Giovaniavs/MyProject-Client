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
    }

  }
`;

export {
  FooterContainer,
};
