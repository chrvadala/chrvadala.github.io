import React from 'react'
import PropTypes from 'prop-types'
import styles from './Introduction.module.css'
import avatar from './avatar.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faPaypal} from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

export default function Introduction({author}) {
  return (
    <div className={styles.container}>

      <img className={styles.avatar} src={avatar} alt={author.name}/>

      <h1 className={styles.me}>
        {author.name}
        {author.linkedin && (
          <a target="_blank" rel="noopener noreferrer" href={author.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a>
        )}
      </h1>

      <div className={styles.role}>
        {author.role}
      </div>

      <div className={styles.location}>
        <FontAwesomeIcon size="lg" icon={faMapMarkerAlt}/> <span>{author.location}</span>
      </div>

      {author.paypal && (
        <div className={styles.donate}>
          <FontAwesomeIcon size="lg" icon={faPaypal}/>
          <a target="_blank" rel="noopener noreferrer" href={author.paypal}>Donate</a>
        </div>
      )}
    </div>
  )
}

Introduction.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    linkedin: PropTypes.string,
    paypal: PropTypes.string,
  })
}
