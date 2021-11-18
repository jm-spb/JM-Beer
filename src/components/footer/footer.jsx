import React from 'react';

import './footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faInstagram, faTelegram, faUntappd } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content container">
      <h1 className="item1">18+ ЧРЕЗМЕРНОЕ УПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ</h1>
      <span className="item2">&copy; {new Date().getFullYear()} JM Beer project</span>

      <div className="social">
        <a href="https://vk.com/id213362809" title="VK" target="_blank" rel="noreferrer" className="round">
          <FontAwesomeIcon icon={faVk} />
        </a>
        <a
          href="https://www.instagram.com/jeanmichel_spb"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
          className="round"
        >
          <FontAwesomeIcon className="width" icon={faInstagram} />
        </a>
        <a href="https://t.me/jean_michel_spb" title="Telegram" target="_blank" rel="noreferrer" className="round">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a
          href="https://untappd.com/user/maverick41"
          title="Untappd"
          target="_blank"
          rel="noreferrer"
          className="round"
        >
          <FontAwesomeIcon icon={faUntappd} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
