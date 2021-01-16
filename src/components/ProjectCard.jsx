import PropTypes from "prop-types";
import styles from './ProjectCard.module.css'

export default function ProjectCard({project}) {

  const githubUri = `https://github.com/${project.org}/${project.id}`
  const npmUri = `https://www.npmjs.com/package/${project.id}`
  const coverallsUri = `https://coveralls.io/github/${project.org}/${project.id}`
  const travisUri = `https://travis-ci.org/${project.org}/${project.id}`
  const ghActionsUri = `https://github.com/${project.org}/${project.id}/actions`

  return (
    <article className={styles.container}>
      <div className={styles.title}>
        <h2>
          <a href={githubUri} target="_blank" rel="noopener noreferrer" className={styles.title}>
            {project.name}
          </a>

          <a href={githubUri} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <img
              src={`https://img.shields.io/github/stars/${project.org}/${project.id}.svg?maxAge=7200&style=social`}
              alt={`Stars for ${project.name}`}
              style={{maxWidth: "100%"}}/>
          </a>
        </h2>
      </div>

      <p>{project.description}</p>

      <ul className={styles.badges}>
        {/*Version*/}
        {project.npm && (
          <li>
            <a href={npmUri} target="_blank" rel="noopener noreferrer">
              <img
                src={`https://img.shields.io/npm/v/${project.id}.svg?maxAge=7200&style=flat-square`}
                alt={`Version for ${project.name}`}
                style={{maxWidth: "100%"}}/>
            </a>
          </li>
        )}

        {/*Downloads*/}
        {project.npm && (
          <li>
            <a href={npmUri} target="_blank" rel="noopener noreferrer">
              <img
                src={`https://img.shields.io/npm/dm/${project.id}.svg?maxAge=7200&style=flat-square`}
                alt={`Downloads for ${project.name}`}
                style={{maxWidth: "100%"}}/>
            </a>
          </li>
        )}

        {/*coveralls*/}
        {project.coveralls && (
          <li>
            <a href={coverallsUri} target="_blank"
               rel="noopener noreferrer">
              <img
                src={`https://img.shields.io/coveralls/github/${project.org}/${project.id}.svg?maxAge=7200&style=flat-square`}
                alt={`Coverage for ${project.name}`}
                style={{maxWidth: "100%"}}/>
            </a>
          </li>
        )}

        {/*travis*/}
        {project.travis && (
          <li>
            <a href={travisUri} target="_blank" rel="noopener noreferrer">
              <img
                src={`https://img.shields.io/travis/${project.org}/${project.id}.svg?maxAge=7200&style=flat-square`}
                alt={`Travis Status for ${project.name}`}
                style={{maxWidth: "100%"}}/>
            </a>
          </li>
        )}

        {/*gh-actions build*/}
        {project.ghActions && (
          <li>
            <a href={ghActionsUri} target="_blank" rel="noopener noreferrer">
              <img
                src={`https://github.com/${project.org}/${project.id}/workflows/Test/badge.svg`}
                alt={`Test status for ${project.name}`}
                style={{maxWidth: "100%"}}/>
            </a>
          </li>
        )}
      </ul>

      {project.npm && (
        <div className={styles.code}>
          yarn install {project.id}
        </div>
      )}

    </article>
  )
}


ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

    travis: PropTypes.bool,
    coveralls: PropTypes.bool,
    ghPages: PropTypes.bool,
    npm: PropTypes.bool,
  })
}
