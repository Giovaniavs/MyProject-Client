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

            <H2 align="center" padding="5% 0"> Hey there! </H2>
            <Container width="75%">
              <Text className="my-personal-description-text" align="center" height="90%">
                Throughout my two years of experience working as a Software Developer I see today
                how the world of technology is changing and how the way we interact with it
                is changing as well. After work with a few different projects in different
                environments and different persons I realized that I really like to work with that.
                My focuses today are building Apps using Flutter, but I have experience in building
                intire web frontends and backends using React, Node, ExpressJS, MongoDB, Firebase
                and PostgreSQL and also maintaining these platforms using Docker, AWS
                and Digital Ocean.
                <br />
                <br />
                About my hobbies, I like to play FPS and RPG games, Work out, Watch animes,
                Read medieval fantasy books, go to the cinema, listen to music, and watch
                &quot;Walking 4k raining tokyo&quot; on youtube every single day!
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
