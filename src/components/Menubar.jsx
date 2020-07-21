import React from 'react';

import styles from './Navbar.module.css';

const Menubar = ({ open, toggleMenubar }) => {
  return (
    <div
      style={{ display: open ? 'block' : 'none' }}
      className={styles.menubar}
    >
      <button onClick={toggleMenubar} className={styles.menubar_close}>
        Close
      </button>
      <ul>
        <li className={styles.menubar_link}>Home</li>
        <li className={styles.menubar_link}>About</li>
        <li className={styles.menubar_link}>Contact</li>
      </ul>
    </div>
  );
};

export default Menubar;
