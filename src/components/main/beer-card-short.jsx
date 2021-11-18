import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import db from '../../firebase';

import './beer-card-short.scss';
import 'aos/dist/aos.css';

const BeerCardShort = () => {
  const [ cardsShort, setCardsShort ] = useState(null);
  const snap = getDocs(collection(db, 'Degustation'));

  useEffect(() => {
    snap.then((snapshot) => {
      const beerCardsShortList = snapshot.docs.map((doc) => (
        <div key={doc.id} data-aos="fade-up" className="short-beer-card">
          <div className="short-beer-name">
            <p>
              <span>{doc.data().beerName}</span> <br />
              <i>{doc.data().factory}</i>
            </p>
          </div>
          <div className="short-beer-grid">
            <div className="short-grid-item1">Оценка Untappd</div>
            <div className="short-grid-item2">{`${doc.data().untappd} из 5`}</div>
            <div className="short-grid-item1">Алкоголь</div>
            <div className="short-grid-item2">{`${doc.data().abv}% об.`}</div>
            <div className="short-grid-item1">Плотность</div>
            <div className="short-grid-item2">{`${doc.data().fg}%`}</div>
            <div className="short-grid-item1">Горечь (IBU)</div>
            <div className="short-grid-item2">{doc.data().ibu}</div>
          </div>

          <div className="short-beer-date-flavour">
            <div className="short-date">{`Дата дегустации: ${doc.data().date}`}</div>
            <div className="short-flavour">
              Основные вкусы: <strong>{doc.data().flavours}</strong>
            </div>
          </div>
        </div>
      ));
      setCardsShort(beerCardsShortList);
    });
  }, []);

  return <div>{cardsShort}</div>;
};

export default BeerCardShort;
