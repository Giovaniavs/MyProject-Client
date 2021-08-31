/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  H1,
  Text,
} from '../../global/globalStyle';

import { SoundtrackContainer } from './styles';

function Soundtrack() {
  const [cardHeight, setCardHeight] = useState(380);
  const smallerScreen = 860;
  const currentScreen = screen.height;
  const cardMusicSyle = {
    borderRadius: '20px',
    boxShadow: '0 3px 12px rgb(0 0 0 / 16%)',
  };
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (currentScreen <= smallerScreen) {
      setCardHeight(280);
    } else {
      setCardHeight(480);
    }
  }, [currentScreen]);

  return (
    <>
      <SoundtrackContainer
        id="Soundtrack"
        zindex={1}
        height="85vh"
        backgroundColor="#e4e4e4"
      >
        <H1
          width="70%"
          borderTop="1px solid #aaaaaa"
          align="center"
          padding="4rem 0 0"
          margin="3rem auto 0"
        >
          Soudtrack!
        </H1>
        <Text align="center" margin="1rem 0 4%"> Stop and enjoy some good music! </Text>
        <div>
          <Slider {...settings}>
            <div>
              <iframe key="music-1" title="My Rock Soundtrack" src="https://open.spotify.com/embed/playlist/4gb80lzNzGX6GpjR3GAoqt" style={cardMusicSyle} width="300" height={cardHeight} frameBorder="0" allow="encrypted-media" />
            </div>
            <div>
              <iframe key="music-2" title="My LoFi Soundtrack" src="https://open.spotify.com/embed/playlist/5oW7eVoraqbiMqxCqGnN5N" style={cardMusicSyle} width="300" height={cardHeight} frameBorder="0" allow="encrypted-media" />
            </div>
            <div>
              <iframe key="music-3" title="My Metal Soundtrack" src="https://open.spotify.com/embed/playlist/4cQP3f5RJl0vSZa4AKOs66" style={cardMusicSyle} width="300" height={cardHeight} frameBorder="0" allow="encrypted-media" />
            </div>
            <div>
              <iframe key="music-4" title="My Metal Soundtrack" src="https://open.spotify.com/embed/playlist/0ARSIGpbnsf4Dmq6mm6z0R" style={cardMusicSyle} width="300" height={cardHeight} frameBorder="0" allow="encrypted-media" />
            </div>
            <div>
              <iframe key="music-4" title="My Metal Soundtrack" src="https://open.spotify.com/embed/playlist/7wO8vafBwBO5DAkRZyqr5x" style={cardMusicSyle} width="300" height={cardHeight} frameBorder="0" allow="encrypted-media" />
            </div>
          </Slider>
        </div>
      </SoundtrackContainer>
    </>
  );
}

export default Soundtrack;
