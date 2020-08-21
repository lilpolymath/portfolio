import React, { useState, useCallback } from 'react';

import Container from './common/Container';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
import useEventListener from './hooks/use-event-listener';

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const toggleMenubar = () => {
    setOpenMenu(!openMenu);
  };

  const handler = useCallback(
    ({ pageX, pageY }) => {
      setCoords({ x: pageX, y: pageY });
    },
    [setCoords]
  );

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  useEventListener('mousemove', handler, window);

  return (
    <>
      <Container>
        <Navbar
          mouseEnter={onMouseEnter}
          mouseLeave={onMouseLeave}
          toggleMenubar={toggleMenubar}
        />
        <Main mouseEnter={onMouseEnter} mouseLeave={onMouseLeave} />
        <Menubar
          mouseEnter={onMouseEnter}
          mouseLeave={onMouseLeave}
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
      <div
        style={{ top: coords.y - 15, left: coords.x - 15 }}
        className={hovered ? 'cursor active' : 'cursor'}
      ></div>
    </>
  );
};

export default App;
