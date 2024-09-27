/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  Text,
  H2,
} from '../../global/globalStyle';

import { ExperiencesContainer } from './styles';

function Experiences() {
  const [backGroundColor, setBackGroundColor] = useState('white');

  document.addEventListener('scroll', changeStyleAfterScroll);

  function changeStyleAfterScroll() {
    if (window.scrollY !== 0) {
      document.removeEventListener('scroll', changeStyleAfterScroll);
      setBackGroundColor('#e4e4e4');
    }
  }

  return (
    <>
      <ExperiencesContainer id="Experiences" backgroundColor={backGroundColor} transition=".8s" zindex={1} height="100%" padding="6rem 0">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '3px solid rgb(25,25,112)',
              color: '#000000',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(25,25,112)' }}
            date="2019 - 7 Months"
            iconStyle={{ background: 'rgb(25,25,112)', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Mathematic and Physics Teaching Assistant</H2>
            <H2 className="vertical-timeline-element-subtitle">
              {' '}
              <a style={{ color: 'rgb(25,25,112)' }} href="https://oficinadeestudos.miedu.com.br/#/landing/saibamais/0" target="_blank"> Oficina de Estudos</a>
              {' '}
              - Recife, BR
            </H2>
            <Text>
              Acting as a teaching assistant, I&apos;ve learned a lot about
              communication skills, which are important soft skills that
              help me on a daily basis in my professional life.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              color: '#000000',
              borderTop: '3px solid rgb(255, 0, 0)',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2019 - 2023 - 4 years"
            iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Bachelor&apos;s in Information Systems</H2>
            <H2 className="vertical-timeline-element-subtitle">
              {' '}
              <a style={{ color: 'rgb(255, 0, 0)' }} href="https://en.wikipedia.org/wiki/Federal_University_of_Pernambuco" target="_blank">UFPE</a>
              {' '}
              - Federal University of Pernambuco - Recife, BR
            </H2>
            <Text>
              I graduated with a GPA of 3.53/4.0 from one of the best technology
              centers in Latin America,
              {' '}
              <a style={{ color: 'rgb(255, 0, 0)' }} href="https://portal.cin.ufpe.br/" target="_blank">CIn - Centro de Informática</a>
              . Here, I learned the basics of programming logic, algorithms and
              data structures, object-oriented programming, teamwork, scientific
              methods, academic writing, the English language, and the fundamentals
              of software development, including backend, DevOps, and mobile and
              web environments.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              color: '#000000',
              borderTop: '3px solid rgb(0,0,0)',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2020 - 2021 - 1 year"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Full Stack Developer</H2>
            <H2 className="vertical-timeline-element-subtitle">
              {' '}
              <a style={{ color: 'rgb(0,0,0)' }} href="https://citi.org.br/" target="_blank">CITi - Centro Integrado de Tecnologia e Informação</a>
              {' '}
              - Recife, BR
            </H2>
            <Text>
              Here, I had my first experience working as a software developer. Being
              part of a Junior Enterprise, which is a company managed by students with
              the objective of gaining experience in the market, was one of the best
              choices I made while I was at the university.
              <br />
              <br />
              The technologies I used to develop the projects included React,
              TypeScript, Node.js, Express, PostgreSQL, React Native, and AWS
              and Digital Ocean for managing deployments.
              <br />
              <br />
              This experience was divided into two phases: the first 6 months
              working as a software developer and the last 6 months as a Tech Leader.
              The first phase was focused on learning the basics of software
              development, while the second phase involved both software development
              and technical team management.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '3px solid rgb(50,205,50)',
              color: '#000000',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2021 - 2022 - 8 Months"
            iconStyle={{ background: 'rgb(50,205,50)', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Intern Mobile Software Developer</H2>
            <H2 className="vertical-timeline-element-subtitle">
              {' '}
              <a style={{ color: 'rgb(50,205,50)' }} href="https://capyba.com/" target="_blank">Capyba Software Studio</a>
              {' '}
              - Recife, PE
            </H2>
            <Text>
              Worked with three main frameworks: Angular, Django,
              and Flutter, but the focus was on Mobile Software
              Development using Dart/Flutter based on the Clean
              Architecture.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '3px solid rgb(50,205,50)',
              color: '#000000',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2022 - 2024 - 2 years and 3 months"
            iconStyle={{ background: 'rgb(50,205,50)', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Mobile Software Developer</H2>
            <H2 className="vertical-timeline-element-subtitle">
              Capyba Software Studio - Recife, PE
            </H2>
            <Text>
              Worked deeply with Flutter in a huge Educational
              App for Law
              {' '}
              <a style={{ color: 'rgb(50,205,50)' }} href="https://play.google.com/store/apps/details?id=com.artics.ejoab&referrer=utm_source%253Dbotao_download_1de4_site_principal&pli=1" target="_blank">OAB de Bolso</a>
              , where I had to talk
              to clients, develop features, write unitary tests,
              document backend routes, integrate an entire mobile
              app with the backend, and deal with publishing in
              the App Store and Google Play Store.
              <br />
              <br />
              Besides this major experience, I also have worked
              partially on other projects to solve specific
              demands, using a variety of frameworks, such as
              React, Node, Angular, Django, and Laravel PHP.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              color: '#000000',
              borderTop: '3px solid rgb(0,0,0)',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2024 - Present"
            iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Pleno Mobile Software Engineer</H2>
            <H2 className="vertical-timeline-element-subtitle">
              {' '}
              <a style={{ color: 'rgb(0,0,0)' }} href="https://compass.uol/en/home/" target="_blank">Compass UOL</a>
              {' '}
              - Passo Fundo, BR
            </H2>
            <Text>
              I am currently working with Flutter on the development of the
              first version of an application, addressing new client demands,
              improving UI/UX experiences, and integrating
              the mobile application with various backend endpoints.
            </Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ExperiencesContainer>

    </>

  );
}

export default Experiences;
