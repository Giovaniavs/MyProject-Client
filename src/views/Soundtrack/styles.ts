import styled from 'styled-components';
import { Container } from '../../global/globalStyle';

const SoundtrackContainer = styled(Container)`
  @media(max-width: 720px) {
    h1 {
      margin: 0 auto 0;
      padding: 3rem 0 0;
    }

    p {
      margin: 1rem 0 3rem;
    }

    .soundtrack-section{
      flex-wrap: wrap;
      height: 55%;
    }

    iframe {
      height: 80px;
      margin: 0 0 25px 0;
    }
  }
`;

export {
  SoundtrackContainer,
};
