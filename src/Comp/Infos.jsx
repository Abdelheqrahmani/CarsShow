import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
export class Infos extends Component {
  render() {
  const location = "Alger, Algeria";
  const phone = "+21356897645";
  const email = "techstore@gmail.com";
    return (
        <div className="infos">
        <p href={`tel`} className="info-item">
          <FontAwesomeIcon icon={faPhone} />
          <span className="info-text">{phone}</span>
        </p>
        <p href={`mailto:${email}`} className="info-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="info-text">{email}</span>
        </p>
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="info-item location"
        >
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="info-text location-text">{location}</span>
        </a>
      </div>
    )
  }
}

export default Infos