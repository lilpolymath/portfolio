import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';

import styles from './Contact.module.css';
import Social from './Social';
import { useEffect } from 'react';

const Intro = ({ style, mouseEnter, mouseLeave }) => {
  useEffect(() => {
    document.title = 'Contact Me';
  }, []);

  return (
    <animated.section style={style} className={styles.contact}>
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.breadcrumb}
      >
        <Link to='/'>
          <span className={styles.inactive}>Home</span>
        </Link>
        <span className={styles.active}> / Contact</span>
      </div>
      <section className={styles.main}>
        <div className={styles.image}>
          <figure>
            <img
              src='https://res.cloudinary.com/favourcodes/image/upload/v1598125526/profile-min.png'
              alt='ayobami favour adedapo'
            />
          </figure>
        </div>
        <div className={styles.contact_content}>
          <header>
            <h2 className={styles.heading}>Have a question?</h2>
          </header>
          <p className={styles.contact_bait}>
            I'm currently available for work/collaborations, but will treat
            messages based on how interesting they sound. Send me a mail and
            I'll respond in 24 hours!
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
