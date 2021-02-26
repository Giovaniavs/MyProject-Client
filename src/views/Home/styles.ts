import styled from 'styled-components';
import { FlexContainer } from '../../global/globalStyle';

const HomeContainer = styled(FlexContainer)`
  @media(max-width: 720px) {
    .my-personal-photo-container {
      top: 25%;
      left: 5%;
      width: 90%;
      height: 30%;
    }

    .my-personal-description-container {
      top: 53%;
      right: 5%;
      width: 90%;
    }
  }
`;

export {
  HomeContainer,
};
