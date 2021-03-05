import styled from 'styled-components';
import { FlexContainer } from '../../global/globalStyle';

const HomeContainer = styled(FlexContainer)`
  @media(max-width: 720px) {
    .my-personal-photo-container {
      top: 15%;
      left: 5%;
      width: 90%;
      height: 40%;
    }

    .my-personal-description-container {
      top: 53%;
      right: 5%;
      width: 90%;
    }

    .my-personal-description-text {
      font-size: .8rem;
    }
  }
`;

export {
  HomeContainer,
};
