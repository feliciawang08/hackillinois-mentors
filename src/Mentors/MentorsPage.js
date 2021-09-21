import { useState, useEffect } from 'react';
import axios from 'axios';
import './MentorsPageStyles.css';
import bakeryBackground from '../assets/Mentors/bakerybg.png';
import SyncLoader from 'react-spinners/SyncLoader';

function MentorsPage() {
    const url = 'https://api.hackillinois.org/upload/blobstore/mentors/';
    const [mentors, setMentors] = useState(null);

    const getMentors = async() => {
      try {
        await axios.get(url)
        .then(result => {
          setMentors(result.data);
        });
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        getMentors();
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
        <div id="loading" className="center_load">
          <SyncLoader role="alert" aria-busy="true" size={35} color={'#CC8A8A'}/>
        </div>
    );
    
}

export default MentorsPage
