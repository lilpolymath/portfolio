import React from 'react';
import styles from './Main.module.css';

const Main = () => {
return (
    <main>
      <section className={styles.intro}>
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
          <p className={styles.specialization}>Web and Mobile</p>
          <h2 className={styles.title}>Frontend Developer</h2>
          <p className={styles.desc}>
            Hello! I'm Simon Dagfinrud, a digital designer from a tiny town on
            the Norwegian west coast. Right now I'm living in Oslo, working at
            Teston, where we're trying to make people's digital experiences
            better by making it easier to test usability.
          </p>
          <p className={styles.next}>View Selected Project</p>
        </div>
      </section>
      <section className={styles.selected_works}></section>
    </main>
  );
};

export default Main;
