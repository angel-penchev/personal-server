import React from 'react';
import './Start.css';
import portrait from './Assets/portrait.png';
import Typewriter from 'typewriter-effect';

const primaryText = `
Hi, my name is <span class="red bold">Angel Penchev</span><br />
and I\'m a <span class="red bold">software developer</span>`;
const secondaryText = `
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates
quo inventore. Sunt numquam sed odit sint autem saepe dicta, aut nam incidunt
optio voluptas, laborum molestias adipisci. Excepturi unde sint delectus quod
autem debitis officia adipisci quae facere dolore?`;

const Start = () => {
  return (
    <div className="start section">
      <div className="left-container">
        <span className="primary">
          <Typewriter
            onInit={
              (typewriter) => {
                typewriter
                    .typeString(primaryText)
                    .start();
              }
            }
          />
        </span>
        <span className="secondary">
          {secondaryText}
        </span>
      </div>
      <div className="right-container">
        <img
          className="portrait"
          src={portrait}
          alt="Portrait of Angel Penchev" />
      </div>
    </div>
  );
};

export default Start;
