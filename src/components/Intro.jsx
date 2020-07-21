import React from 'react';
// import {animated} from 'react-spring'''
import styles from './Intro.module.css';

const Intro = ({ active, setActive, style }) => {
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
          Hello! I'm Simon Dagfinrud, a digital designer from a tiny town on the
          Norwegian west coast. Right now I'm living in Oslo, working at Teston,
          where we're trying to make people's digital experiences better by
          making it easier to test usability.
        </p>
        <button onClick={() => setActive(!active)} className={styles.next}>
          View Select Projects <div className={styles.right}></div>
        </button>
      </div>
    </section>
  );
};

export default Intro;
