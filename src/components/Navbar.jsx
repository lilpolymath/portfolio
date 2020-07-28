import React, { useState, useEffect, useCallback } from 'react';

import { ReactComponent as Day } from '../assets/day.svg';
import { ReactComponent as Night } from '../assets/night.svg';

import styles from './Navbar.module.css';

const Navbar = ({ toggleMenubar, mouseEnter, mouseLeave }) => {
  const [day, setDay] = useState(true);

  const switchBG = useCallback(() => {
    document.documentElement.style.setProperty(
      '--first',
      day ? '#f2994a' : '#bdbdbd'
    );
    document.documentElement.style.setProperty(
      '--second',
      day ? '#bdbdbd' : '#f2994a'
    );
    document.documentElement.style.setProperty(
      '--main',
      day ? '#ffffff' : '#1a181b'
    );
    document.documentElement.style.setProperty(
      '--text',
      day ? '#1a181b' : '#ffffff'
    );
    document.documentElement.style.setProperty(
      '--content',
      day ? '#3e3d3d' : '#d8d8d8'
    );
    document.documentElement.style.setProperty(
      '--project_link',
      day ? '#1a181b' : '#f2994a'
    );
    document.documentElement.style.setProperty(
      '--nav',
      day ? '#f2994a' : '#ffffff'
    );
  }, [day]);

  const nightMode = () => {
    setDay(false);
    switchBG();
  };

  const dayMode = () => {
    setDay(true);
    switchBG();
  };

  useEffect(() => {
    switchBG();
  }, [switchBG]);

  return (
    <nav className={styles.nav}>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.logo}
      >
        <div>
          <Day onClick={dayMode} className={styles.first} />
        </div>
        <div>
          <h1 className={styles.logo_text}>Ayobami Adedapo</h1>
        </div>
        <div>
          <Night onClick={nightMode} className={styles.second} />
        </div>
      </div>
      <div className={styles.button_wrapper}>
        <button
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          onClick={toggleMenubar}
          className={styles.menu_button}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
