import React, { useState } from 'react';

const Li = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'clicked' : '';
    return (
      <li key={index} className={active} onClick={() => onClick(index)}>
        {item}
      </li>
    );
  });

  return <React.Fragment>{renderedItems}</React.Fragment>;
};

export default Li;
