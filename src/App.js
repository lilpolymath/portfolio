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
      <Menubar
        
        open={openMenu}
        toggleMenubar={toggleMenubar}
      />
      <div
        className='wrap'
        style={{
          opacity: openMenu ? 0.4 : 0,
          display: openMenu ? 'block' : 'none',
        }}
      ></div>
    </Container>
  );
};

export default App;
