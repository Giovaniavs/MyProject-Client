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
  const [cardOpacity, setCardOpacity] = useState('0');
  const [textOpacity, setTextOpacity] = useState('1');

  document.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      setPhotoPositionX('5%');
      setPhotoPositionY('15%');
      setDescriptionPositionX('5%');
      setDescriptionPositionY('5%');
      setBackGroundColor('white');
      setCardOpacity('0');
      setTextOpacity('1');
    } else {
      setPhotoPositionX('13%');
      setPhotoPositionY('25%');
      setDescriptionPositionX('10%');
      setDescriptionPositionY('10%');
      setBackGroundColor('#c7ffff');
      setCardOpacity('1');
      setTextOpacity('0');
    }
  });

  return (
    <>
      <Container id="Home" zindex={1} height="100vh" display="flex" align="center" justify="center">
        <FlexContainer padding="0 10%" align="center" justify="space-between" backgroundColor={backGroundColor} transition=".8s">
          <Text align="center" weight="bold" textSize="2.5em" opacity={textOpacity} transition="0.5s all ease-in-out">
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
          <FlexContainer height="60%" width="40%" boxShadow="0 8px 18px rgba(0,0,0,.16)" borderRadius="30px" position="absolute" left={photoPositionX} top={photoPositionY} opacity={cardOpacity} transition="0.5s all ease-in-out">
            <ImageComponent src={MyPhoto} objectFit="fit-content" borderRadius="30px" />
          </FlexContainer>
          <FlexContainer zindex={2} height="60%" width="40%" boxShadow="0 8px 18px rgba(0,0,0,.16)" borderRadius="30px" position="absolute" right={descriptionPositionX} bottom={descriptionPositionY} opacity={cardOpacity} transition="0.5s all ease-in-out" direction="column" align="center">
            <H2 align="center" padding="10px 0" fontFamily="'Indie Flower', cursive"> Brief description about me! </H2>
            <Container width="75%">
              <Text fontFamily="'Indie Flower', cursive" padding="10px 0">
                Hello there!
                I&apos;m glad to see you right here, nice to meet you!
                So, I&apos;m Giovani Albuquerque and I really like to study and build some
                web applications by frequently using react.js in the front-end and node.js plus
                expressin the back-end! Nowadays I&apos;m so excited to learn more about DevOps
                and improve my backend skills, so, let&apos;s study and talk with the best
                friend of the developer, the Google!
                <br />
                About my hobbies, I am some one that likes to play games, preferably playing
                by pc, like DayZ, Battlefield, Dota 2, The Witcher and some others. My favorite
                style of game is RPG without a doubt! But I&apos;m a FPS fan too! About movies,
                series and animes my favorite are Game Of Thrones as a serie, Saving Private Ryan
                as a movie and Attack On Titan(Shingeki no Kyojin) / Dragon Ball as anime!
                <br />
                And the last but not the least, about my favorite books! Since 2017 I&apos;ve
                started to pratice my reading habit, and to do that, I started reading Game of
                Thrones haha! Was an answome serie of books and pull me through inside in the world
                of the literature. After GoT, I started to read more about fantasy world, reading
                great titles like Lord Of The Rings, The Hobbit and Warcraft books! Nowadays
                I&apos;m reading a techinical book to help me improve my Developer skills, this one
                is the famous Clean Code of uncle bob!
              </Text>
            </Container>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </>

  );
}

export default Home;
