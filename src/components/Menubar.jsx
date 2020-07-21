import React from 'react';

import styles from './Navbar.module.css';
import { useSpring, animated, config } from 'react-spring';

const Menubar = ({ open, toggleMenubar }) => {
  const sidebar = useSpring({
    transform: open ? `translateX(0)` : `translateX(100%)`,
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

      {
        // const transitions = useTransition(active, null, {
        //   from: { transform: active ? `translateX(0)` : `translateX(100%)` },
        //   enter: { transform: `translateX(0)` },
        //   leave: { transform: active ? `translateX(0)` : `translateX(-100%)` },
        //   config: config.molasses,
        // });
      }
    </animated.div>
  );
};

export default Menubar;
