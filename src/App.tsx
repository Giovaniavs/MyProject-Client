import React from 'react';
import { Navbar, Footer } from './components';
import {
  Home,
  Experiences,
  Soundtrack,
  Projects,
} from './views';

const App: React.FC = () => (
  <>
    <Navbar />
    <Home />
    <Experiences />
    <Soundtrack />
    <Projects />
    <Footer />
  </>
);

export default App;
