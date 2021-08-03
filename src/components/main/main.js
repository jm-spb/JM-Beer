import React, { useState, useEffect } from 'react';
import beerClassify from '../../assets/images/BEER.png';
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
      <section id="home">
        <div className="container content">
          <div data-aos="fade-up" className="home-heading">
            <h1 className="bottom-line">Классификация сортов пива</h1>
          </div>
          <SRLWrapper>
            <div data-aos="fade-up" className="images">
              <img src={beerClassify} alt="Классификация пива" />
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
