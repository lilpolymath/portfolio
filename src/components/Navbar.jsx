import React, { useState, useEffect, useCallback } from 'react';

import { ReactComponent as Day } from '../assets/day.svg';
import { ReactComponent as Night } from '../assets/night.svg';

import styles from './Navbar.module.css';

const Navbar = ({ toggleMenubar }) => {
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
      <div className={styles.logo}>
        <Day onClick={dayMode} className={styles.first} />
        <h1 className={styles.logo_text}>Ayobami Adedapo</h1>
        <Night onClick={nightMode} className={styles.second} />
      </div>
      <button onClick={toggleMenubar} className={styles.menu_button}>
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
