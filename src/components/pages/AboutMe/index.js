import React from 'react';

import './style.css';
import meImage from '../../../images/me.jpg';

function AboutMe() {
    return (
        <div className="about-me-page">
            <h2>About Me</h2>
            <div className="about-me-content">
                <img className="about-me-image" src={meImage} />
                <div className="about-me-info">
                    <p>
                        Originally from Philly, I am adjusting to California life! 
                        I have been fascinated by coding and web development ever since
                        I found Codecademy 6 years ago. Below is the culmination
                        of that work.
                    </p>
                    <p>
                        When I'm not coding, you can find me cooking some tasty meals, 
                        kicking back by the pool, and listening to 90s and 2000s pop 
                        punk music.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
