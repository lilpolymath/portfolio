import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';
import { ChevronRight } from 'react-feather';

import Meta from '../components/Meta';
import styles from './Project.module.css';
import projects from '../data/projects.json';

const Project = ({ style, mouseEnter, mouseLeave }) => {
  return (
    <animated.section style={style} className={styles.selected_works}>
      <Meta title='Ayobami Adedapo' url='https://favourcodes.com/' />
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.breadcrumb}
      >
        <Link to='/'>
          <span className={styles.inactive}>Home</span>
        </Link>
        <span className={styles.active}> / Work Experience</span>
      </div>
      <div className={styles.section_heading}>
        <div className={styles.main_container}>
          <h2 className={styles.main}>Work Experience</h2>
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project.key} className={styles.project}>
            <div className={styles.project_image}>
              <img
                src={project.image}
                alt=''
                className={styles.project_screenshot}
              />
            </div>
            <div className={styles.project_content}>
              <div>
                {project.type && (
                  <p className={styles.project_type}>{project.type}</p>
                )}
                <h3 className={styles.project_name}>{project.name}</h3>
                <p className={styles.project_desc}>{project.description}</p>
              </div>
              <a
                className={styles.project_link}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Project <ChevronRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </animated.section>
  );
};

export default Project;
