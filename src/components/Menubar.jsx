import React from 'react';

import styles from './Navbar.module.css';
import { useSpring, animated, config } from 'react-spring';

const Menubar = ({ open, toggleMenubar }) => {
  const sidebar = useSpring({
    transform: open ? `translateX(0)` : `translateX(100%)`,
    display: open ? 'block' : 'none',
    config: { ...config.molasses, duration: 500 },
  });

  return (
    <animated.div style={sidebar} className={styles.menubar}>
      <button onClick={toggleMenubar} className={styles.menubar_close}>
        Close
      </button>
      <ul>
        <li className={styles.menubar_link}>Home</li>
        <li className={styles.menubar_link}>About</li>
        <li className={styles.menubar_link}>Projects</li>
        <li className={styles.menubar_link}>Contact</li>
      </ul>
    </animated.div>
  );
};

export default Menubar;
