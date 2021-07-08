import React from 'react';
import portrait from '../assets/portrait.png';
import Typewriter from 'typewriter-effect';

const Start = () => {
    return (
        <div className="start section">
            <div className="left-container">
                <div className="caption">
                    <span className="primary">
                        <Typewriter
                            onInit={
                                (typewriter) => {
                                    typewriter
                                    .typeString('Hi, my name is <span class="red">Angel Penchev</span><br />and I\'m a <span class="red">software developer</span>')
                                    .start()
                                }
                            }
                        />
                    </span>
                    <span className="secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quo inventore. Sunt numquam sed odit sint autem saepe dicta, aut nam incidunt optio voluptas, laborum molestias adipisci. Excepturi unde sint delectus quod autem debitis officia adipisci quae facere dolore?
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
