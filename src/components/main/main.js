import React, { useState, useEffect } from 'react';
import beerClassify from '../../assets/images/BEER.png';
import beerClassify_thumbnail from '../../assets/images/BEER_thumbnail.webp';
import Header from '../header/header';
import { SRLWrapper } from 'simple-react-lightbox';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './main.scss';
import BeerCardShort from './beer-card-short';

const Main = () => {
  const [navTransparent, setNavTransparent] = useState('top');

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        setNavTransparent('');
      } else setNavTransparent('top');

      Aos.init({ duration: 1500 });
    };
  }, [navTransparent]);

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
                <img
                  src={beerClassify_thumbnail}
                  width="180"
                  height="320"
                  loading="lazy"
                  alt="Классификация пива"
                />
              </a>
            </div>
          </SRLWrapper>

          <div className="line2"></div>

          <div data-aos="fade-up" className="home-heading">
            <h1 className="bottom-line">Последние дегустации</h1>
          </div>
          <div data-aos="fade-up">
            <BeerCardShort />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main;
