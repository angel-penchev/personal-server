import React from 'react';
import './Nav.css';
import { Link } from 'react-scroll'

interface Props {
    scrollSpy?: boolean,
    scrollSmooth?: boolean,
    scrollDuration?: number
}

const Nav: React.FC<Props> = ({scrollSpy, scrollSmooth, scrollDuration}) => {
    return (
        <div className="nav">
            <div className="home">
                <Link
                    to="start"
                    spy={scrollSpy ?? true}
                    smooth={scrollSmooth ?? true}
                    duration={scrollDuration ?? 300}
                >
                    <span className="primary">Angel Penchev</span>
                    <br />
                    <span className="secondary">SOFTWARE DEVELOPER</span>
                </Link>
            </div>
            <div className="links">
                <Link
                    className="link"
                    to="start"
                    spy={scrollSpy ?? true}
                    smooth={scrollSmooth ?? true}
                    duration={scrollDuration ?? 300}
                >
                    Start
                </Link>
                <Link
                    className="link"
                    to="contact"
                    spy={scrollSpy ?? true}
                    smooth={scrollSmooth ?? true}
                    duration={scrollDuration ?? 300}
                >
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Nav;