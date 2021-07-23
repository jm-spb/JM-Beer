import React, { useState, useEffect, useRef } from 'react';
import beerClassify from '../../assets/images/BEER.png';
import Header from '../header/header';
import { SRLWrapper } from 'simple-react-lightbox';
import './main.scss';

const Main = () => {
  const [showHeaderClassify, setShowHeaderClassify] = useState('');
  const [showBeerClassify, setShowBeerClassify] = useState('');
  const [showHeaderDeg, setShowHeaderDeg] = useState('');
  const [scroll, setScroll] = useState(0);

  const [navTransparent, setNavTransparent] = useState('top');

  const refHeaderClassify = useRef();
  const refBeerClassify = useRef();
  const refHeaderDeg = useRef();

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    window.onscroll = () => {
      /* при первом рендере ref.current === undefined 
      ref свяжется с дом-элементом только после изменения состояния. 
      меняем состояние при первом же скролле */
      setScroll(1);

      if (window.pageYOffset > 100) {
        setNavTransparent('');
      } else setNavTransparent('top');

      if (scroll && isInViewport(refHeaderClassify.current)) {
        setShowHeaderClassify('show');
      }
      if (scroll && isInViewport(refBeerClassify.current)) {
        setShowBeerClassify('show');
      }
      if (scroll && isInViewport(refHeaderDeg.current)) {
        setShowHeaderDeg('show');
      }
    };
  });

  return (
    <React.Fragment>
      <Header top={navTransparent} />
      <section id="home">
        <div className="container content">
          <div
            ref={refHeaderClassify}
            className={`home-heading ${showHeaderClassify}`}
          >
            <h1 className="bottom-line">Классификация сортов пива</h1>
          </div>
          <SRLWrapper>
            <div ref={refBeerClassify} className={`images ${showBeerClassify}`}>
              <img src={beerClassify} alt="Классификация пива" />
            </div>
          </SRLWrapper>

          <div className="line2"></div>

          <div ref={refHeaderDeg} className={`home-heading ${showHeaderDeg}`}>
            <h1 className="bottom-line">Последние дегустации</h1>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main;
