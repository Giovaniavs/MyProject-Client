import React from 'react';
import { Navbar } from './components';
import { Home, Presentation, Projects } from './views';

const App: React.FC = () => (
  <>
    <Navbar />
    <Home />
    <Presentation />
    <Projects />
  </>
);

export default App;
