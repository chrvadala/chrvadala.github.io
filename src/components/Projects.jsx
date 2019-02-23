import React from 'react'
import ProjectCard from "./ProjectCard";
import projects from '../database/projects';
import Introduction from "./Introduction";
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <>
      <Introduction/>
      <div className={styles.grid}>
        {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
      </div>
    </>
  )
}
