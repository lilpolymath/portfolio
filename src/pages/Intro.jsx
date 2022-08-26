import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';
import { ChevronRight } from 'react-feather';

import Social from './Social';
import styles from './Intro.module.css';
import Meta from '../components/Meta';

const Intro = ({ style, mouseEnter, mouseLeave }) => {
  return (
    <animated.section style={style} className={styles.intro}>
      <Meta title='Ayobami Adedapo' url='https://favourcodes.com/' />
      <div className={styles.image}>
        <figure>
          <img
            src='https://res.cloudinary.com/favourcodes/image/upload/v1598125526/profile-min.png'
            alt=''
          />
        </figure>
      </div>
      <div className={styles.about}>
        <p className={styles.skills}>
          html, js, css, react, gatsby, typescript, nextjs, nodejs, graphql.
        </p>
        <h2 className={styles.title}>Frontend Engineer</h2>
        <p className={styles.desc}>
          Hello! I'm Ayobami Favour Adedapo, a Frontend Engineer and UI/UX
          Enthusiast. I love creating beautiful and intuitive interfaces for
          users. I have an eye for design with a User-Driven Approach to
          Development. In my spare time, I work on ThreeJs, WebGL and various
          CSS Animations.
        </p>
        <Social mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
        <Link
          to='/projects'
          className={styles.next}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          Work Experience <ChevronRight />
        </Link>
      </div>
    </animated.section>
  );
};

export default Intro;
