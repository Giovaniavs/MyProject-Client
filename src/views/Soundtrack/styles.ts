import styled from 'styled-components';
import { Container } from '../../global/globalStyle';

const SoundtrackContainer = styled(Container)`
  .slick-prev:before {
  color: black;
  }
  .slick-next:before {
    color: black;
  }

  .slick-slide {
      display: grid;
      place-items: center;
  }
  
  @media(max-width: 720px) {
    h1 {
      margin: 0 auto 0;
      padding: 3rem 0 0;
    }

    p {
      margin: 1rem 0 3rem;
    }
  }
`;

export {
  SoundtrackContainer,
};
