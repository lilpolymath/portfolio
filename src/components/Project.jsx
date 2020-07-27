import React from 'react';

import styles from './Project.module.css';
import projects from './projects.json';
import { ReactComponent as Chevron } from '../assets/chevron_right.svg';

const Project = ({ active, setActive, style, MouseEnter, MouseLeave }) => {
  return (
    <section style={style} className={styles.selected_works}>
      <div
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
        onClick={() => setActive(!active)}
        className={styles.breadcrumb}
      >
        <p className={styles.inactive}>
          Home/
          <span className={styles.active}>Selected Projects</span>
        </p>
      </div>
      <div className={styles.section_heading}>
        <div className={styles.main_container}>
          <h2 className={styles.main}>Selected Projects</h2>
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
            <a
              className={styles.project_link}
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
              href={project.link}
            >
              View Project <Chevron />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
