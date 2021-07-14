import React, { useState } from 'react';
import {
  Container,
  FlexContainer,
  H2,
  ImageComponent,
  Text,
} from '../../global/globalStyle';

import { HomeContainer } from './styles';

import MyPhoto from '../../assets/my-photo.jpeg';

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
            Bem vindo!
            <br />
            Welcome!
            <br />
            Bienvenido!
            <br />
            Herzlich willkommen!
            <br />
            Benvenuto!
            <br />
            بيم فيندو
            <br />
            ベン・ヴィンド
            <br />
            歡迎
            <br />
            어서 오십시오
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

            <H2 align="center" padding="5% 0"> Brief description about me! </H2>
            <Container width="75%">
              <Text className="my-personal-description-text" align="center" height="90%">
                Hello there!
                I&apos;m glad to see you right here, nice to meet you!
                So, my name is Giovani Albuquerque and I am someone
                that really likes to study and build some web applications.
                Nowadays I&apos;m so excited to learn more about Dev Web and
                Mobile in all directions (front, back and devops) because I belive
                in the digital transofrmation and I will help this revolution acting
                in the vanguard, in the code development!

                <br />
                <br />
                About my hobbies, I really like to play games, preferably playing
                by pc, like DayZ, Battlefield, Dota 2, The Witcher and some others. My favorite
                style of game is RPG without a doubt, but I&apos;m a FPS fan too! About movies,
                series and animes my favorite are Game Of Thrones as a serie, Saving Private Ryan
                as a movie and Dragon Ball as anime!
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
