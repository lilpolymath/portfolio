import React, { useState } from 'react';

import { ReactComponent as Day } from '../assets/day.svg';
import { ReactComponent as Night } from '../assets/night.svg';

import styles from './Navbar.module.css';

const Navbar = () => {
  const [day, setDay] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenubar = () => {
    setOpenMenu(!openMenu);
  };

  const switchBG = () => {
    setDay(!day);
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
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Day onClick={switchBG} className={styles.first} />
        <h1 className={styles.logo_text}>Ayobami Adedapo</h1>
        <Night onClick={switchBG} className={styles.second} />
      </div>
      <button className={styles.menu_button}>Menu</button>
      <div
        style={{ display: openMenu ? 'block' : 'none' }}
        className={styles.menubar}
      ></div>
    </nav>
  );
};

export default Navbar;
