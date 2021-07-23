import React, { useState } from 'react';
// import './link.scss';

const Link = ({ href, children }) => {
  const [current, setCurrent] = useState('');

  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
    setCurrent('current');
  };

  return (
    <a onClick={onClick} className={current} href={href}>
      {children}
    </a>
  );
};

export default Link;
