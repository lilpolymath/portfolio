import React, { useEffect, useCallback } from 'react';

import useLocalStorage from '../hooks/use-localstorage';

import { ReactComponent as Day } from '../assets/day.svg';
import { ReactComponent as Night } from '../assets/night.svg';
import styles from './Navbar.module.css';

const Navbar = ({ toggleMenubar, mouseEnter, mouseLeave }) => {
  const [day, setDay] = useLocalStorage('dark');

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

  if (!day) {
    switchBG();
    console.log('gets here');
  }

  const nightMode = () => {
    setDay(false);
  };

  const dayMode = () => {
    setDay(true);
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
        <Day onClick={dayMode} className={styles.first} />
        <h1 className={styles.logo_text}>Ayobami Adedapo</h1>
        <Night onClick={nightMode} className={styles.second} />
      </div>
      <button
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={toggleMenubar}
        className={styles.menu_button}
      >
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
