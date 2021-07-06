import React from 'react';
import portrait from '../assets/portrait.png';

const Start = () => {
    return (
        <div className="start section">
            <div className="left-container">
                <div className="caption">
                    <span className="primary">
                        Hi, my name is Angel Penchev<br />
                        and I'm a software developer
                    </span>
                    <span className="secondary">
                        
                    </span>
                </div>
            </div>
            <div className="right-container">
                <img className="portrait" src={portrait} alt="Portrait of Angel Penchev" />
            </div>
        </div>
    )
}

export default Start
