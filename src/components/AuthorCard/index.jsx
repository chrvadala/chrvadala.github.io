import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faPaypal, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import avatar from './avatar.png'
import "./index.css"
import { AUTHOR_LOCATION, AUTHOR_NAME, AUTHOR_ROLE, LINK_GH_SPONSOR, LINK_LINKEDIN, LINK_PAYPAL } from '../../constants';

export default function AuthorCard() {
  return (
    <div className="AuthorCard">
      <img className="avatar" src={avatar} alt={AUTHOR_NAME}/>

      <h1 className="me">
        {AUTHOR_NAME}
        <a target="_blank" rel="noopener noreferrer" href={LINK_LINKEDIN}><FontAwesomeIcon icon={faLinkedin}/></a>
      </h1>

      <div className="role">
       {AUTHOR_ROLE}
      </div>

      <div className="location">
        <FontAwesomeIcon size="lg" icon={faMapMarkerAlt}/>
        <span>{AUTHOR_LOCATION}</span>
      </div>

      <div className="support">
        <FontAwesomeIcon size="lg" icon={faGithub}/>
        <a target="_blank" rel="noopener noreferrer" href={LINK_GH_SPONSOR}>Donate via Github Sponsor</a>
      </div>

      <div className="support">
        <FontAwesomeIcon size="lg" icon={faPaypal}/>
        <a target="_blank" rel="noopener noreferrer" href={LINK_PAYPAL}>Donate via PayPal</a>
      </div>
    </div>
  )
}