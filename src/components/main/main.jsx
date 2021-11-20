import React, { useState, useEffect } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import Aos from 'aos';

import 'aos/dist/aos.css';
import './main.scss';

import Header from '../header/header';
import BeerCardShort from './beer-card-short';

import beerClassify from '../../assets/images/BEER.png';
import beerClassifyThumbnail from '../../assets/images/BEER_thumbnail.webp';

const Main = () => {
  const [ navTransparent, setNavTransparent ] = useState('top');

  const onScroll = () => {
    if (window.pageYOffset > 100) {
      setNavTransparent('');
    } else setNavTransparent('top');

    Aos.init({ duration: 1500 });
  };

  useEffect(
    () => {
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    },
    [ navTransparent ]
  );

  return (
    <React.Fragment>
      <Header top={navTransparent} />
      <section className="home">
        <div className="container content">
          <div data-aos="fade-up" className="home-heading">
            <h1 className="bottom-line">Классификация сортов пива</h1>
          </div>
          <SRLWrapper>
            <div data-aos="fade-up" className="images">
              <a href={beerClassify}>
                <img src={beerClassifyThumbnail} width="200" height="450" loading="lazy" alt="Классификация пива" />
              </a>
            </div>
          </SRLWrapper>

          <div className="line2" />

          <div data-aos="fade-up" className="home-heading">
            <h1 className="bottom-line">Последние дегустации</h1>
          </div>
          <BeerCardShort />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main;
