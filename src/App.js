import React, { useState } from 'react';

import Container from './common/Container';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenubar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Container>
      <Navbar toggleMenubar={toggleMenubar} />
      <Main />
      <Menubar open={openMenu} toggleMenubar={toggleMenubar} />
    </Container>
  );
};

export default App;
