import React from 'react';
import { Navbar, Footer } from './components';
import { Home, Presentation, Projects } from './views';

const App: React.FC = () => (
  <>
    <Navbar />
    <Home />
    <Presentation />
    <Projects />
    <Footer />
  </>
);

export default App;
