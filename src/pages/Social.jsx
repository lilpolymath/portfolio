import React from 'react';
import { Codepen, Twitter, Linkedin, GitHub, Dribbble } from 'react-feather';

import styles from './Social.module.css';

const Social = ({ mouseEnter, mouseLeave }) => {
  return (
    <div className={styles.social_links}>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='http://twitter.com/favourcodes'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Twitter profile link'
      >
        <Twitter />
      </a>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='http://github.com/lilpolymath'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub profile link'
      >
        <GitHub />
      </a>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='https://www.linkedin.com/in/ayobami-a-90638a130/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn Prfile link'
      >
        <Linkedin />
      </a>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href=' https://dribbble.com/lilpolymath'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Dribbble profile link'
      >
        <Dribbble />
      </a>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='https://codepen.io/favourcodes'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Codepen profile link'
      >
        <Codepen />
      </a>
    </div>
  );
};

export default Social;
