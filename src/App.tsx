import React from 'react';
import { Navbar, Footer } from './components';
import GlobalStyle from './global/globalStyle';
import {
  Home,
  Experiences,
  Soundtrack,
  Projects,
  HowNerdAreYou,
  Publications,
} from './views';

const App: React.FC = () => (
  <>
    <Navbar />
    <Home />
    <Experiences />
    <Soundtrack />
    <Projects />
    <Publications />
    <HowNerdAreYou />
    <Footer />
    <GlobalStyle />
  </>
);

export default App;
