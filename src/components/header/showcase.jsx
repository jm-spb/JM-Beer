import React from 'react';

import './showcase.scss';

import video from '../../assets/videos/Beer.mp4';
import poster from '../../assets/images/poster.webp';

const Showcase = () => (
  <div className="showcase">
    <div className="video-container">
      <video src={video} poster={poster} autoPlay muted loop />
    </div>
    <div className="title">
      <h1>JM Beer - Персональный Проект О Пиве</h1>
      <h2>Технология, Классификация, Дегустации</h2>
    </div>
  </div>
);

export default Showcase;
