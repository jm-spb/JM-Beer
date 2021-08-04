import React from 'react';
import './header.scss';

import Showcase from './showcase';
import Navbar from './navbar';

const Header = ({ top }) => {
  return (
    <header className="header-home">
      <div className="wrapper">
        <Navbar top={top} />
      </div>

      <Showcase />
    </header>
  );
};

export default Header;
