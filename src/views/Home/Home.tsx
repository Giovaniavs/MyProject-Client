import React, { useState } from 'react';
import { Container, FlexContainer, H1 } from '../../global/globalStyle';

function Home() {
  const [backGroundColor, setBackGroundColor] = useState('white');
  const [photoPositionX, setPhotoPositionX] = useState('5%');
  const [photoPositionY, setPhotoPositionY] = useState('15%');
  const [descriptionPositionX, setDescriptionPositionX] = useState('5%');
  const [descriptionPositionY, setDescriptionPositionY] = useState('5%');
  document.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      setPhotoPositionX('5%');
      setPhotoPositionY('15%');
      setDescriptionPositionX('5%');
      setDescriptionPositionY('5%');
      setBackGroundColor('white');
    } else {
      setPhotoPositionX('13%');
      setPhotoPositionY('25%');
      setDescriptionPositionX('10%');
      setDescriptionPositionY('10%');
      setBackGroundColor('#c7ffff');
    }
  });

  return (
    <>
      <Container id="Home" zindex={1} height="100vh" display="flex" align="center" justify="center">
        <FlexContainer padding="0 10%" align="center" justify="space-between" backgroundColor={backGroundColor} transition=".5s">
          <FlexContainer height="60%" width="40%" boxShadow="0 8px 18px rgba(0,0,0,.16)" borderRadius="30px" position="absolute" left={photoPositionX} top={photoPositionY} transition="0.5s all ease-in-out">
            <H1 align="center" padding="5px 0"> It&apos;s me! </H1>
          </FlexContainer>
          <FlexContainer zindex={2} height="60%" width="40%" boxShadow="0 8px 18px rgba(0,0,0,.16)" borderRadius="30px" position="absolute" right={descriptionPositionX} bottom={descriptionPositionY} transition="0.5s all ease-in-out">
            <H1 align="center" padding="5px 0"> Brief description </H1>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </>

  );
}

export default Home;
