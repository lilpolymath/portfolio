import React, { useState } from 'react';

import { ReactComponent as Day } from '../assets/day.svg';
import { ReactComponent as Night } from '../assets/night.svg';

import styles from './Navbar.module.css';

const Navbar = ({ toggleMenubar }) => {
  const [day, setDay] = useState(true);

  const switchBG = () => {
    setDay(prevState => !prevState);
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
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Day onClick={switchBG} className={styles.first} />
        <h1 className={styles.logo_text}>Ayobami Adedapo</h1>
        <Night onClick={switchBG} className={styles.second} />
      </div>
      <button onClick={toggleMenubar} className={styles.menu_button}>
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
