import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Li = ({ items }) => {
  const [ activeIndex, setActiveIndex ] = useState(null);

  const onClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'clicked' : '';
    return (
      <li key={item} className={active} onClick={() => onClick(index)} onKeyDown={() => onClick(index)} role="menuitem">
        {item}
      </li>
    );
  });

  return renderedItems;
};

Li.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Li;
