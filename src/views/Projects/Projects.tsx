/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';

import {
  FlexContainer,
  H1,
  Text,
} from '../../global/globalStyle';

import { ProjectCard } from './styles';

export default function Projects() {
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

  const projects = [
    { name: 'This Single Page', link: 'https://github.com/Giovaniavs/MyProject-Client', color: '#2fd3d3' },
    { name: 'Plant Manager', link: 'https://github.com/Giovaniavs/PlantManager', color: '#2ac458' },
    { name: 'Moveit', link: 'https://github.com/Giovaniavs/Moveit', color: '#5965e0' },
    { name: 'Microservice JWT', link: 'https://github.com/Giovaniavs/Microservice-JWT-Auth', color: '#ff6ada' },
    { name: 'Capyba Challange', link: 'https://github.com/Giovaniavs/Capyba_Challenge', color: '#2ac458' },
  ];

  return (
    <FlexContainer
      id="Projects"
      height="fit-content"
      direction="column"
      align="center"
      backgroundColor="#e4e4e4"
      padding="10% 20%"
    >
      <H1
        width="70vw"
        align="center"
        borderTop="1px solid #aaaaaa"
        padding="4rem 0 0 0"
      >
        My particular projects
      </H1>
      <Text
        align="center"
        margin="1rem 0 3rem 0"
        height="50px"
      >
        Explore the repositories of particular projects!
      </Text>
      <FlexContainer backgroundColor="inhierit" justify="center" maxWidth="900px">
        <FlexContainer
          wrap="wrap"
          backgroundColor="inhierit"
          maxWidth="750px"
          margin={isMobile ? ('unset') : ('0 0 0 15%')}
        >
          {projects.map((e) => (
            <a
              key={e.name}
              style={{
                textDecoration: 'none', color: 'unset', height: 'fit-content', margin: '20px 10px',
              }}
              href={e.link}
              target="_blank"
            >
              <ProjectCard effectAfterHover={e.color} margin="4% 0">
                <Text textSize="1.5rem" width="fit-content" align="center">{e.name}</Text>
              </ProjectCard>
            </a>
          ))}
        </FlexContainer>
      </FlexContainer>

    </FlexContainer>
  );
}
