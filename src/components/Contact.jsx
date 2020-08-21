import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';

import styles from './Contact.module.css';
import Social from './Social';

const Intro = ({ style, mouseEnter, mouseLeave }) => {
  return (
    <animated.section style={style} className={styles.contact}>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.breadcrumb}
      >
        <Link to='/home'>
          <span className={styles.inactive}>Home</span>
        </Link>
        <span className={styles.active}>/Contact</span>
      </div>
      <section className={styles.main}>
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
            carefully distinguishing those beliefs that are reasonable and
            logical from those which — however appealing they may be to our
            native egocentrism.
          </p>
          <div className={styles.contact_options}>
            <div className={styles.contact_option}>
              <p>Email</p>
              <a
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                href='mailto:ayofavour7@gmail.com'
              >
                ayofavour7@gmail.com
              </a>
            </div>
            <div className={styles.contact_option}>
              <p>Phone Number</p>
              <a
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                href='tel:+2348143567540'
              >
                +234 814 356 7540
              </a>
            </div>
          </div>
          <Social mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
        </div>
      </section>
    </animated.section>
  );
};

export default Intro;
