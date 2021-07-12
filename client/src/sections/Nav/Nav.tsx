import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';

interface Props {
  scrollSpy?: boolean,
  scrollSmooth?: boolean,
  scrollDuration?: number
}

const Nav: React.FC<Props> = (props: Props) => {
  return (
    <div className="nav">
      <div className="home">
        <Link
          to="start"
          spy={props.scrollSpy ?? true}
          smooth={props.scrollSmooth ?? true}
          duration={props.scrollDuration ?? 300}
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
          spy={props.scrollSpy ?? true}
          smooth={props.scrollSmooth ?? true}
          duration={props.scrollDuration ?? 300}
        >
          Start
        </Link>
        <Link
          className="link"
          to="contact"
          spy={props.scrollSpy ?? true}
          smooth={props.scrollSmooth ?? true}
          duration={props.scrollDuration ?? 300}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
