import React from 'react';
import { Navbar, Footer } from './components';
import GlobalStyle from './global/globalStyle';
import {
  Home,
  Experiences,
  Projects,
  Publications,
} from './views';

const App: React.FC = () => (
  <>
    <Navbar />
    <Home />
    <Experiences />
    <Projects />
    <Publications />
    <Footer />
    <GlobalStyle />
  </>
);

export default App;
