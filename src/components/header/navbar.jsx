import React from 'react';
import PropTypes from 'prop-types';

import './navbar.scss';

import Link from './link';
import logo from '../../assets/images/logo.png';

const Navbar = ({ top }) => (
  <div className="wrap">
    <nav className={`main-nav ${top}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="JMlogo" id="logo" />
          <h1>JM Beer</h1>
        </div>

        <ul>
          <li>
            <Link href="/">ГЛАВНАЯ</Link>
          </li>
          <li>
            <Link href="/technology">ТЕХНОЛОГИЯ</Link>
          </li>
          <li>
            <Link href="/bjcp">BJCP</Link>
          </li>
          <li>
            <Link href="/degustation">ДЕГУСТАЦИИ</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

Navbar.propTypes = {
  top: PropTypes.string
};

Navbar.defaultProps = {
  top: ''
};

export default Navbar;
