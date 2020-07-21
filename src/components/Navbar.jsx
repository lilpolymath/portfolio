import React, { useState } from 'react';

import { ReactComponent as Day } from '../assets/day.svg';
import { ReactComponent as Night } from '../assets/night.svg';

import styles from './Navbar.module.css';

// Honestly I don't know how Mobile first design works
// so here is my lazy attempt at making that.

// Omo!! all the best let's see how this turns out.

const Navbar = () => {
  // Control the fill opacity of the svg with hooks.
  // Might need to move this to the index to have a base level control
  // SMH!! I used this method in my last project ooo

  const [day, setDay] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenubar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Day style={{ fill: 'red' }} />
        <h1 className={styles.logo_text}>Ayobami Adedapo</h1>
        <Night />
      </div>
      <button onClick={toggleMenubar} className={styles.menu}>
        Menu
      </button>
      <div
        style={{ display: openMenu ? 'block' : 'none' }}
        className={styles.menubar}
      ></div>
    </nav>
  );
};

export default Navbar;
