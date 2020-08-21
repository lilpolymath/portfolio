import React, { useEffect, useCallback } from 'react';

import { ReactComponent as Day } from '../assets/day.svg';
import { ReactComponent as Night } from '../assets/night.svg';

import styles from './Navbar.module.css';
import useStickyState from '../hooks/use-sticky';

const Navbar = ({ toggleMenubar, mouseEnter, mouseLeave }) => {
  const [mode, setMode] = useStickyState(null, 'night');

  const switchBG = useCallback(() => {
    document.documentElement.style.setProperty(
      '--first',
      mode === 'day' ? '#f2994a' : '#bdbdbd'
    );
    document.documentElement.style.setProperty(
      '--second',
      mode === 'day' ? '#bdbdbd' : '#f2994a'
    );
    document.documentElement.style.setProperty(
      '--main',
      mode === 'day' ? '#ffffff' : '#1a181b'
    );
    document.documentElement.style.setProperty(
      '--text',
      mode === 'day' ? '#1a181b' : '#ffffff'
    );
    document.documentElement.style.setProperty(
      '--content',
      mode === 'day' ? '#3e3d3d' : '#d8d8d8'
    );
    document.documentElement.style.setProperty(
      '--project_link',
      mode === 'day' ? '#1a181b' : '#f2994a'
    );
    document.documentElement.style.setProperty(
      '--nav',
      mode === 'day' ? '#f2994a' : '#ffffff'
    );
    document.documentElement.style.setProperty(
      '--shadow',
      mode === 'day' ? '#dfe6e9' : '#000509'
    );
  }, [mode]);

  const nightMode = () => {
    setMode('night');
    switchBG();
  };

  const dayMode = () => {
    setMode('day');
    switchBG();
  };

  useEffect(() => {
    if (
      window.matchMedia('(prefers-color-scheme)').media !== 'not all' &&
      mode === null
    ) {
      setMode('night');
      switchBG();
    }
  }, [mode, setMode, switchBG]);

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
        {mode === 'day' ? (
          <div tabIndex='0' onClick={nightMode} className={styles.mode}>
            <Day className={styles.first} />
          </div>
        ) : (
          <div tabIndex='0' onClick={dayMode} className={styles.mode}>
            <Night className={styles.second} />
          </div>
        )}
        <div>
          <h1 className={styles.logo_text}>Ayobami Adedapo</h1>
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
