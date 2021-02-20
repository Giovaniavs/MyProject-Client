import React, { useState } from 'react';
import {
  Container,
  FlexContainer,
  H2,
  ImageComponent,
  Text,
} from '../../global/globalStyle';

import MyPhoto from '../../assets/my-photo.jpeg';

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
        <FlexContainer padding="0 10%" align="center" justify="space-between" backgroundColor={backGroundColor} transition=".8s">
          <FlexContainer height="60%" width="40%" boxShadow="0 8px 18px rgba(0,0,0,.16)" borderRadius="30px" position="absolute" left={photoPositionX} top={photoPositionY} transition="0.5s all ease-in-out">
            <ImageComponent src={MyPhoto} objectFit="fit-content" borderRadius="30px" />
          </FlexContainer>
          <FlexContainer zindex={2} height="60%" width="40%" boxShadow="0 8px 18px rgba(0,0,0,.16)" borderRadius="30px" position="absolute" right={descriptionPositionX} bottom={descriptionPositionY} transition="0.5s all ease-in-out" direction="column" align="center">
            <H2 align="center" padding="10px 0" fontFamily="'Indie Flower', cursive"> Brief description about me! </H2>
            <Container width="75%">
              <Text fontFamily="'Indie Flower', cursive" padding="10px 0">
                Hello there!
                I&apos;m glad to see you right here, nice to meet you!
                So, i&apos;m Giovani Albuquerque and i really like to study and build some
                web applications by frequently using react.js in the front-end and node.js plus
                expressin the back-end! Nowadays i&apos;m so excited to learn more about DevOps
                and improve my backend skills, so, let&apos;s study and talk with the best
                friend of the developer, the Google!
              </Text>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </>

  );
}

export default Home;
