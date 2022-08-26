import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';

import Social from './Social';
import styles from './Contact.module.css';
import Meta from '../components/Meta';

const Intro = ({ style, mouseEnter, mouseLeave }) => {
  return (
    <animated.section style={style} className={styles.contact}>
      <Meta
        title='Contact Me | Ayobami Adedapo'
        url='https://favourcodes.com/contact'
      />

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
              <p>Twitter</p>
              <a
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                href='https://twitter.com/messages/compose?recipient_id=1249996578154328066&text=Hey!%20would%20love%20to%20talk%20to%20you%20about'
              >
                @favourcodes
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
