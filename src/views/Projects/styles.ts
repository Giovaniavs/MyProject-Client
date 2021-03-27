import styled from 'styled-components';

import {
  FlexContainer,
  H1,
  Text,
} from '../../global/globalStyle';

interface Props {
  effectAfterHover?: string;
}

export const ProjectCard = styled(FlexContainer)`
  height: 150px;
  width: 150px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 12px rgb(0 0 0 / 16%);
  border-radius:15px;
  transition: .5s;
  :hover {
    box-shadow: 0 3px 12px ${(p: Props) => p.effectAfterHover};
    color: ${(p: Props) => p.effectAfterHover};
  }

  @media(max-height: 720px) {
    height: 80px;
  }
`;
