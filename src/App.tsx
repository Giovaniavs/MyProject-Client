import React from 'react';
import { Navbar, Footer } from './components';
import {
  Home,
  Experiences,
  Soundtrack,
  Projects,
  HowNerdAreYou,
} from './views';

const App: React.FC = () => (
  <>
    <Navbar />
    <Home />
    <Experiences />
    <Soundtrack />
    <Projects />
    <HowNerdAreYou />
    <Footer />
  </>
);

export default App;
