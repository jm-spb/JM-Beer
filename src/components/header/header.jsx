import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

import Showcase from './showcase';
import Navbar from './navbar';

const Header = ({ top }) => (
  <header className="header-home">
    <div className="wrapper">
      <Navbar top={top} />
    </div>

    <Showcase />
  </header>
);

Header.propTypes = {
  top: PropTypes.string.isRequired
};

export default Header;
