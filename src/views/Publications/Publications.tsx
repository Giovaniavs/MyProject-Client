/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';

import {
  FlexContainer,
  H1,
  Text,
} from '../../global/globalStyle';

import { PublicationCard } from './styles';

export default function Publications() {
  const [isMobile, setisMobile] = useState<boolean>();
  const currentScreen = screen.width;
  const mobileScreen = 720;

  useEffect(() => {
    if (currentScreen <= mobileScreen) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  }, [currentScreen]);

  const publications = [
    { name: 'Dart/Flutter Telegram Bot APK', link: 'https://gavs2.medium.com/telegram-bot-to-send-apk-automatically-using-flutter-dart-34931afb426', color: '#2f97d3' },
    { name: 'Microservice JWT', link: 'https://gavs2.medium.com/o-que-s%C3%A3o-microservi%C3%A7os-jwt-e-a-apresenta%C3%A7%C3%A3o-de-uma-aplica%C3%A7%C3%A3o-real-de-um-microservi%C3%A7o-de-6e435f801bbf', color: '#2ac458' },
    { name: 'Deploy of Node.js with TypeScript', link: 'https://gavs2.medium.com/deploy-de-aplica%C3%A7%C3%B5es-node-js-com-typescript-utilizando-a-plataforma-heroku-d295b7ebf9a2', color: '#5965e0' },
    { name: 'Software Engineering Project', link: 'https://gavs2.medium.com/projeto-geral-engenharia-de-software-b78ab2d5571b', color: '#ff6ada' },
    { name: 'Flutter: Advantages and Disadvantages', link: 'https://medium.com/capyba/flutter-a-few-advantages-and-disadvantages-of-this-famous-framework-241699d9811f', color: '#0047AB' },
  ];

  return (
    <FlexContainer
      id="Publications"
      height="fit-content"
      direction="column"
      align="center"
      backgroundColor="#e4e4e4"
      padding={isMobile ? ('10% 20%') : ('3% 0 5% 0')}
    >
      <H1
        width="70vw"
        align="center"
        borderTop="1px solid #aaaaaa"
        padding="4rem 0 0 0"
      >
        Publications
      </H1>
      <Text
        align="center"
        margin="1rem 0 3rem 0"
        height="50px"
      >
        Personal publications exploring differents subjects in the area of software engineering.
      </Text>
      <FlexContainer backgroundColor="inhierit" justify="center" maxWidth="900px">
        <FlexContainer
          wrap="wrap"
          backgroundColor="inhierit"
          maxWidth="750px"
          margin={isMobile ? ('unset') : ('0 0 0 15%')}
        >
          {publications.map((e) => (
            <a
              key={e.name}
              style={{
                textDecoration: 'none', color: 'unset', height: 'fit-content', margin: '20px 10px',
              }}
              href={e.link}
              target="_blank"
            >
              <PublicationCard effectAfterHover={e.color} margin="4% 0">
                <Text textSize="1.5rem" width="fit-content" align="center">{e.name}</Text>
              </PublicationCard>
            </a>
          ))}
        </FlexContainer>
      </FlexContainer>

    </FlexContainer>
  );
}
