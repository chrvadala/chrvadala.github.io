import ProjectCard from "./ProjectCard";
import PropTypes from 'prop-types'
import styles from './Projects.module.css'

export default function Projects({projects}) {
  return (
    <>
      <h3>My Open Source Projects</h3>
      <div className={styles.grid}>
        {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
      </div>
    </>
  )
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
}
