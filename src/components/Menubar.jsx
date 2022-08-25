import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import { useSpring, animated, config } from 'react-spring';

const Menubar = ({ open, toggleMenubar, mouseEnter, mouseLeave }) => {
  const sidebar = useSpring({
    transform: open ? `translateX(0)` : `translateX(120%)`,
    maxWidth: open ? '500px' : '0px',
    config: { ...config.gentle, duration: 750 },
  });

  return (
    <animated.div style={sidebar} className={styles.menubar}>
      <button
        onClick={toggleMenubar}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.menubar_close}
      >
        Close
      </button>
      <ul>
        <li>
          <Link className={styles.menubar_link} to='/' onClick={toggleMenubar}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className={styles.menubar_link}
            to='/projects'
            onClick={toggleMenubar}
          >
            Work & Projects
          </Link>
        </li>
        <li>
          <Link
            className={styles.menubar_link}
            to='/blog'
            onClick={toggleMenubar}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={styles.menubar_link}
            to='/contact'
            onClick={toggleMenubar}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            className={styles.menubar_link}
            href='https://docs.google.com/document/d/11MZVyldGFcMEbaNKppo24DAvOJeXQ6JUfAjHKT3mCuo/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            Résumé
          </a>
        </li>
      </ul>
    </animated.div>
  );
};

export default Menubar;
