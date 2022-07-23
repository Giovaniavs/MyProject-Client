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
              borderTop: '3px solid rgb(33, 150, 243)',
              color: '#000000',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2019 - 7 Months"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Mathematic and Physics Tutor</H2>
            <H2 className="vertical-timeline-element-subtitle">
              {' '}
              <a style={{ color: 'rgb(33, 150, 243)' }} href="https://oficinadeestudos.miedu.com.br/#/landing/saibamais/0" target="_blank"> Oficina de Estudos</a>
              {' '}
              - Recife, PE
            </H2>
            <Text>
              Acting as a tutor, I&apos;ve learned so much about teaching and conversation skills,
              which are soft skills that help me a lot in my professional life nowadays.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              color: '#000000',
              borderTop: '3px solid rgb(233, 30, 99)',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2019 - 3 Years until now"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Started the Graduation in Information Systems</H2>
            <H2 className="vertical-timeline-element-subtitle">
              {' '}
              <a style={{ color: 'rgb(233, 30, 99)' }} href="https://www.ufpe.br/UFPE" target="_blank">UFPE</a>
              {' '}
              - Federal University of Pernambuco
            </H2>
            <Text>
              I started my studies in one of the best centers of techonology in the Latin America,
              {' '}
              <a style={{ color: 'rgb(233, 30, 99)' }} href="https://portal.cin.ufpe.br/" target="_blank">CIn - Centro de Informática</a>
              . I was aproved in the university with 784 points in the vestibular ENEM, which
              made me occupy the 6th position of the approved ones!
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              color: '#000000',
              borderTop: '3px solid #7bdf54',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2020 - 6 Months"
            iconStyle={{ background: '#7bdf54', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Full Stack Developer</H2>
            <H2 className="vertical-timeline-element-subtitle">
              {' '}
              <a style={{ color: '#7bdf54' }} href="https://citi.org.br/" target="_blank">CITi</a>
              {' '}
              - UFPE, CIn
            </H2>
            <Text>
              It was my first experience as a developer in the real market. Be a part of a Junior
              Enterprise was, without a doubt, the best choice that I made! I&apos;ve learned a
              lot things about the Frontend and Backend technologies, like React and Node.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '3px solid #7bdf54',
              color: '#000000',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2021 - 6 Months"
            iconStyle={{ background: '#7bdf54', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Tech Leader</H2>
            <H2 className="vertical-timeline-element-subtitle"> CITi - UFPE, CIn</H2>
            <Text>
              As a tech leader I was responsible to: Teach the new developers in the enterprise
              to grow up fastly, Work as a Quality Analist in my squad, Lead the area and make it
              better for the future CITi&apos;s generations!
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '3px solid #b2ff93',
              color: '#000000',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2021 - 7 Months"
            iconStyle={{ background: '#b2ff93', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Software Development Intern</H2>
            <H2 className="vertical-timeline-element-subtitle">
              {' '}
              <a style={{ color: '#7bdf54' }} href="https://capyba.com/" target="_blank">Capyba Software</a>
              {' '}
              - Recife, PE
            </H2>
            <Text>
              Worked with three main frameworks, which were Angular, Django and Flutter.
              The focus was on the Mobile Software Development using the Dart/Flutter
              based on the Clean Architecture.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '3px solid #b2ff93',
              color: '#000000',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2021 - 5 Months"
            iconStyle={{ background: '#b2ff93', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Software Development Trainee</H2>
            <H2 className="vertical-timeline-element-subtitle">
              Capyba Software - Recife, PE
            </H2>
            <Text>
              Worked deeply with the Flutter framework in
              a specific project, which made me increase my proficiency
              as a software developer and as a flutter developer.
              I learned a lot about the Clean Architecture and how to use it in the project.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '3px solid #b2ff93',
              color: '#000000',
              fontFamily: 'Roboto',
              borderRadius: '15px',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2022 - Actual"
            iconStyle={{ background: '#b2ff93', color: '#fff' }}
          >
            <H2 className="vertical-timeline-element-title">Software Development Junior</H2>
            <H2 className="vertical-timeline-element-subtitle">
              Capyba Software - Recife, PE
            </H2>
            <Text>
              Untill now, all I have to say is that my responsibilites are
              increasing and I&apos;m learning new things everyday, not only
              as a software developer but also as a professionial of Techology.
            </Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ExperiencesContainer>

    </>

  );
}

export default Experiences;
