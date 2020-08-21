import React from 'react';

import styles from './Navbar.module.css';
import { useSpring, animated, config } from 'react-spring';

const Menubar = ({ open, toggleMenubar }) => {
  const sidebar = useSpring({
    transform: open ? `translateX(0)` : `translateX(120%)`,
    maxWidth: open ? '500px' : '0px',
    config: { ...config.gentle, duration: 750 },
  });

  return (
    <animated.div style={sidebar} className={styles.menubar}>
      <button onClick={toggleMenubar} className={styles.menubar_close}>
        Close
      </button>
      <ul>
        <li>
          <a className={styles.menubar_link} href='/home'>
            Home
          </a>
        </li>
        <li>
          <a className={styles.menubar_link} href='/projects'>
            Projects
          </a>
        </li>
        <li>
          <a className={styles.menubar_link} href='/blog'>
            Blog
          </a>
        </li>
        <li>
          <a className={styles.menubar_link} href='/contact'>
            Contact
          </a>
        </li>
      </ul>
    </animated.div>
  );
};

export default Menubar;
