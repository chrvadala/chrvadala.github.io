import React from 'react'
import styles from './Introduction.module.css'
import avatar from './avatar.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const linkedinUri = 'https://www.linkedin.com/in/chrvadala';

export default function Introduction() {
  return (
    <div className={styles.container}>

      <img className={styles.avatar} src={avatar} alt="Christian Vadalà"/>

      <h1 className={styles.me}>
        Christian Vadalà
        <a href={linkedinUri}><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href={linkedinUri}><FontAwesomeIcon icon={faEnvelope}/></a>
      </h1>

      <div className={styles.role}>
        React & Node.js developer
      </div>

      <div className={styles.location}>
        <FontAwesomeIcon size="lg" icon={faMapMarkerAlt}/> <span>Rome, Italy, Europe, Earth</span>
      </div>
    </div>
  )
}
