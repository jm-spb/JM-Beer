import React from 'react';
// import './link.scss';

const Link = ({ href, children }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={href}>
      {children}
    </a>
  );
};

export default Link;
