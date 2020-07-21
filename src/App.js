import React from 'react';

import Container from './common/Container';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Main />
    </Container>
  );
};

export default App;
