/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { FlexContainer } from '../../global/globalStyle';

export default function HowNerdAreYou() {
  return (
    <FlexContainer
      height="fit-content"
      width="100vw"
      justify="center"
      backgroundColor="#e4e4e4"
      padding="0 0 3% 0"
    >
      <a href="http://www.nerdtests.com/ft_nq.php" target="_blank">
        <img src="http://www.nerdtests.com/images/ft/nq/143223efbc.gif" style={{ boxShadow: '0 3px 12px rgb(0 0 0 / 16%)', borderRadius: '10px' }} alt="I am nerdier than 74% of all people. Are you a nerd? Click here to take the Nerd Test, get nerdy images and jokes, and talk on the nerd forum!" />
      </a>
    </FlexContainer>
  );
}
