import React, { useState } from 'react';
import Link from './link';
import './navbar.scss';
import logo from '../../assets/images/logo.png';

const Navbar = ({ top }) => {
  return (
    <div className="wrap">
      <nav id="main-nav" className={top}>
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
};

export default Navbar;
