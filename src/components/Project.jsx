import React from 'react';
import styles from './Project.module.css';

import projects from './projects.json';

const Project = ({ active, setActive, style }) => {
  return (
    <section style={style} className={styles.selected_works}>
      <div onClick={() => setActive(!active)} className={styles.breadcrumb}>
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
        {projects.map(project => (
          <div key={project.key} className={styles.project}>
            <img
              src={project.image}
              alt=''
              className={styles.project_screenshot}
            />
            <h3 className={styles.project_name}>{project.name}</h3>
            <p className={styles.project_desc}>{project.description}</p>
            <a className={styles.project_link} href={project.url}>
              View Project <div className={styles.right}></div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
