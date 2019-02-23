import React from 'react'
import PropTypes from 'prop-types'
import styles from './Introduction.module.css'
import avatar from './avatar.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const linkedinUri = 'https://www.linkedin.com/in/chrvadala';

export default function Introduction({author}) {
  return (
    <div className={styles.container}>

      <img className={styles.avatar} src={avatar} alt={author.name}/>

      <h1 className={styles.me}>
        {author.name}
        <a href={linkedinUri}><FontAwesomeIcon icon={faLinkedin}/></a>
      </h1>

      <div className={styles.role}>
        {author.role}
      </div>

      <div className={styles.location}>
        <FontAwesomeIcon size="lg" icon={faMapMarkerAlt}/> <span>{author.location}</span>
      </div>
    </div>
  )
}

Introduction.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })
}
