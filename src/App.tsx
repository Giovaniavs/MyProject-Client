import React from 'react';
import { Navbar, Footer } from './components';
import { Home, Experiences, Projects } from './views';

const App: React.FC = () => (
  <>
    <Navbar />
    <Home />
    <Experiences />
    <Projects />
    <Footer />
  </>
);

export default App;
