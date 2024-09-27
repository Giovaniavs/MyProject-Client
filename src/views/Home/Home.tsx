import React, { useState } from 'react';
import {
  Container,
  FlexContainer,
  H2,
  ImageComponent,
  Text,
} from '../../global/globalStyle';

import { HomeContainer } from './styles';

import MyPhoto from '../../assets/my-photo.jpg';

function Home() {
  const [backGroundColor, setBackGroundColor] = useState('white');
  const [photoPositionX, setPhotoPositionX] = useState('5%');
  const [photoPositionY, setPhotoPositionY] = useState('15%');
  const [descriptionPositionX, setDescriptionPositionX] = useState('5%');
  const [descriptionPositionY, setDescriptionPositionY] = useState('5%');
  const [cardOpacity, setCardOpacity] = useState('0');
  const [textOpacity, setTextOpacity] = useState('1');

  document.addEventListener('scroll', changeStyleAfterScroll);

  function changeStyleAfterScroll() {
    if (window.scrollY !== 0) {
      setPhotoPositionX('13%');
      setPhotoPositionY('25%');
      setDescriptionPositionX('10%');
      setDescriptionPositionY('10%');
      setBackGroundColor('#e4e4e4');
      setCardOpacity('1');
      setTextOpacity('0');
      document.removeEventListener('scroll', changeStyleAfterScroll);
    }
  }

  return (
    <>
      <HomeContainer
        id="Home"
        zindex={1}
        height="100vh"
        display="flex"
        align="center"
        justify="center"
      >
        <FlexContainer
          padding="0 10%"
          align="center"
          justify="space-between"
          backgroundColor={backGroundColor}
          transition=".8s"
        >
          <Text
            align="center"
            weight="bold"
            textSize="2.5em"
            opacity={textOpacity}
            transition="0.5s all ease-in-out"
          >
            Hello Everyone! 🇺🇸
            <br />
            Salut tout le monde! 🇫🇷
            <br />
            Olá pessoal! 🇧🇷
          </Text>
          <FlexContainer
            className="my-personal-photo-container"
            height="60%"
            width="40%"
            boxShadow="0 8px 18px rgba(0,0,0,.16)"
            borderRadius="30px"
            position="absolute"
            left={photoPositionX}
            top={photoPositionY}
            opacity={cardOpacity}
            transition="0.5s all ease-in-out"
          >
            <ImageComponent src={MyPhoto} objectFit="cover" borderRadius="30px" />
          </FlexContainer>
          <FlexContainer
            className="my-personal-description-container"
            zindex={2}
            height="fit-content"
            padding="0 0 5% 0"
            width="40%"
            boxShadow="0 8px 18px rgba(0,0,0,.16)"
            borderRadius="30px"
            position="absolute"
            right={descriptionPositionX}
            bottom={descriptionPositionY}
            opacity={cardOpacity}
            transition="0.5s all ease-in-out"
            direction="column"
            align="center"
          >

            <H2 align="center" padding="5% 0"> Introduction </H2>
            <Container width="75%">
              <Text className="my-personal-description-text" align="center" height="90%">
                Hello everyone, I&apos;m called Giovani Albuquerque and I come from Brazil!
                I have been working with software development since the middle of the
                pandemic back in 2020, when I started working on front web and backend
                to build web applications using frameworks like React and Node. Nowadays,
                I&apos;m more focused on mobile development using Flutter and I have been working
                in this environment sice 2021, when I first started with React Native.
                In general, I like the area of software development as a whole, solving
                problems of front web, mobile, backend, devops are all part of the main
                objective, which is offering a better experience for
                the costumers of the application.
                <br />
                <br />
                About my hobbies, I like to play computer games, work out,
                watch tv series and movies, read fantasy books, and listen to good music!
                Also, I love learning languages, nowadays I am focused on the learning of the
                french language, il est très interessant! Latter on, I am going to focus
                on the japanese language parce que j&apos;aime beaucoup le Japan!
                <br />
              </Text>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </HomeContainer>
    </>

  );
}

export default Home;
