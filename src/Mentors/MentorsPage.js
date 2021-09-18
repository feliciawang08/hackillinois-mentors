import { useState, useEffect } from 'react';
import axios from 'axios';
import './MentorsPageStyles.css';
import bakeryBackground from '../assets/Mentors/bakerybg.png';

function MentorsPage() {
    const url = 'https://api.hackillinois.org/upload/blobstore/mentors/';
    const [mentors, setMentors] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(result => {
                setMentors(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [url]);

    // Only for valid Mentors
    if (mentors) {
      const cards = mentors.data.map((mentor) =>
        <div className="card" id="card" role="cell">
          <img className="card-img" src={bakeryBackground} alt="Card Background"/>
            <img className="profile-img" src={mentor.profile} alt={`${mentor.firstName} ${mentor.lastName}`}/>
            <h1 id="mentor-name" role="columnheader">{mentor.firstName} {mentor.lastName}</h1>
            <p className="description" id="description" role="contentinfo">{mentor.description}</p>
        </div>
      )
      
      return (
        <div>
            <h1 className="heading" id="title">Mentors</h1>
              <div className="container" id="card-container" role="grid">
                <div className="card-wrapper" id="card-wrapper" role="grid">
                  {cards}
                </div>
              </div>
        </div>
      );
    }

    return (
        <div></div>
    );
    
}

export default MentorsPage
