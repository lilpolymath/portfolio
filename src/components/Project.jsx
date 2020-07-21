import React from 'react';
import styles from './Project.module.css';

const Project = () => {
  return (
    <section className={styles.selected_works}>
      <div className={styles.breadcrumb}>
        <p className={styles.inactive}>Home/</p>
        <p className={styles.active}>Selected</p>
      </div>
      <div className={styles.section_heading}>
        <div className={styles.main_container}>
          <h2 className={styles.main}>Selected Projects</h2>
        </div>
        <div className={styles.carousel}>
          <div className={styles.arrow_back}>
            <div className={styles.arrow_left}></div>
          </div>
          <div className={styles.arrow_front}>
            <div className={styles.arrow_right}></div>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <img
            src='https://res.cloudinary.com/favourcodes/image/upload/v1588659120/Browser_xoynxe.png'
            alt=''
            className={styles.project_screenshot}
          />
          <h3 className={styles.project_name}>Name of Project</h3>
          <p className={styles.project_desc}>
            This is the information about the projects.
          </p>
          <a
            className={styles.project_link}
            href='http://lilpolymath.github.io/landing-pages'
          >
            View Project <div className={styles.right}></div>
          </a>
        </div>
        <div className={styles.project}>
          <img
            src='https://res.cloudinary.com/favourcodes/image/upload/v1588659120/Browser_xoynxe.png'
            alt=''
            className={styles.project_screenshot}
          />
          <h3 className={styles.project_name}>Name of Project</h3>
          <p className={styles.project_desc}>
            This is the information about the projects.
          </p>
          <a
            className={styles.project_link}
            href='http://lilpolymath.github.io/landing-pages'
          >
            View Project <div className={styles.right}></div>
          </a>
        </div>
        <div className={styles.project}>
          <img
            src='https://res.cloudinary.com/favourcodes/image/upload/v1588659120/Browser_xoynxe.png'
            alt=''
            className={styles.project_screenshot}
          />
          <h3 className={styles.project_name}>Name of Project</h3>
          <p className={styles.project_desc}>
            This is the information about the projects.
          </p>
          <a
            className={styles.project_link}
            href='http://lilpolymath.github.io/landing-pages'
          >
            View Project <div className={styles.right}></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
