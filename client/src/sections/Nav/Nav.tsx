import React, {useState} from 'react';
import './Nav.css';
import {Link} from 'react-scroll';

interface Props {
  scrollSpy?: boolean,
  scrollSmooth?: boolean,
  scrollDuration?: number
}

const links = ['Start', 'Projects', 'Contact'];

const Nav: React.FC<Props> = (props: Props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className={`nav ${isMenuActive ? 'nav-menu-active' : ''}`}>
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
      <div className={`links ${isMenuActive ? 'links-menu-active' : ''}`}>
        {links.map((value, index) => {
          return <Link
            key={index}
            className="link"
            to={value.toLowerCase()}
            spy={props.scrollSpy ?? true}
            smooth={props.scrollSmooth ?? true}
            duration={props.scrollDuration ?? 300}
            onClick={() => setIsMenuActive(false)}
            style={{animationDelay: index / 5 + 1 + 's'}}
          >
            {value}
          </Link>;
        })}
      </div>
      <div
        className={`menu-btn ${isMenuActive ? 'menu-btn-active' : ''}`}
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Nav;
