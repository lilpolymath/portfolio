import React from 'react';
// import {animated} from 'react-spring'
import styles from './Intro.module.css';
import { ReactComponent as Chevron } from '../assets/chevron_right.svg';

const Intro = ({ active, setActive, style, MouseEnter, MouseLeave }) => {
  return (
    <section style={style} className={styles.intro}>
      <div className={styles.image}>
        <figure>
          <img
            src='https://res.cloudinary.com/favourcodes/image/upload/v1580333920/IMG_20191015_142955_qkhkhe.jpg'
            alt='ayobami favour adedapo'
          />
        </figure>
      </div>
      <div className={styles.about}>
        <p className={styles.skills}>html, js, css, react.</p>
        <p className={styles.specialization}>Mobile and Web</p>
        <h2 className={styles.title}>Frontend Developer</h2>
        <p className={styles.desc}>
          Hello! I'm Ayobami Favour Adedapo, a Frontend Developer for Web and
          Mobile, and UI/UX Enthusiast. I love creating beautiful and intuitive
          interfaces for users. I have an eye for design with a User-Driven
          Approach to Development. In my spare time, I work on ThreeJs, WebGL
          and various CSS Animations.
        </p>
        <button
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
          onClick={() => setActive(!active)}
          className={styles.next}
        >
          View Select Projects <Chevron />
        </button>
      </div>
    </section>
  );
};

export default Intro;
