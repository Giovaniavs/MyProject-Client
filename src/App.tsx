import React from 'react';
import { Navbar, Footer } from './components';
import { Home, Experiences, Soundtrack } from './views';

const App: React.FC = () => (
  <>
    <Navbar />
    <Home />
    <Experiences />
    <Soundtrack />
    <Footer />
  </>
);

export default App;
