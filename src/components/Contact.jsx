import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';

import styles from './Contact.module.css';

const Intro = ({ style, mouseEnter, mouseLeave }) => {
  return (
    <animated.section style={style} className={styles.contact}>
      <div className={styles.image}>
        <figure>
          <img
            src='https://res.cloudinary.com/favourcodes/image/upload/v1597784911/profile.png'
            alt='ayobami favour adedapo'
          />
        </figure>
      </div>
      <div className={styles.contact_content}>
        <header>
          <h3 className={styles.heading}>Contact Information</h3>
        </header>
        <p className={styles.contact_bait}>
          Socrates set the agenda for the tradition of critical thinking,
          namely, to reflectively question common beliefs and explanations,
          carefully distinguishing those beliefs that are reasonable and logical
          from those which — however appealing they may be to our native
          egocentrism.
        </p>
        <div className={styles.contact_options}>
          <div className={styles.contact_option}>
            <p>Email</p>
            <a href='mailto:ayofavour7@gmail.com'>ayofavour7@gmail.com</a>
          </div>
          <div className={styles.contact_option}>
            <p>Phone Number</p>
            <a href='tel:+2348143567540'>+234 814 356 7540</a>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default Intro;
