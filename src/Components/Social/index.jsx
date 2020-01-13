import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

const Social = ({ socialLink }) => {
    if (socialLink.includes('facebook'))  return <a target="_blank" className="social" href={socialLink}><FontAwesomeIcon icon={faFacebookF} /></a>
    if (socialLink.includes('github')) return <a target="_blank" className="social" href={socialLink}><FontAwesomeIcon icon={faGithub} /></a>
    if (socialLink.includes('linkedin')) return <a target="_blank" className="social" href={socialLink}><FontAwesomeIcon icon={faLinkedinIn} /></a>
    if (socialLink.includes('instagram')) return <a target="_blank" className="social" href={socialLink}><FontAwesomeIcon icon={faInstagram} /></a>
    if (socialLink.includes('youtube')) return <a target="_blank" className="social" href={socialLink}><FontAwesomeIcon icon={faYoutube} /></a>
    if (socialLink.includes('gmail') || socialLink.includes('yahoo')) return <a target="_blank" className="social" href={`mailto:${socialLink}`}><FontAwesomeIcon icon={faEnvelope} /></a>
    return null
}

export default Social