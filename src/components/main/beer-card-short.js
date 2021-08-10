import React, { useState, useEffect } from 'react';
import './beer-card-short.scss';
// import firebase from '../../firebase';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

const BeerCardShort = () => {
  const [cardsShort, setCardsShort] = useState(null);
  // const db = firebase.firestore();

  const snap = getDocs(collection(db, 'Degustation'));
  // snap.then((a) => console.log(a.data()));
  // console.log(snap);

  useEffect(() => {
    snap.then((snapshot) => {
      const beerCardsShortList = snapshot.docs.map((doc) => {
        return (
          <div key={doc.id} className="short-beer-card">
            <div className="short-beer-name">
              <p>
                <span>{doc.data().beerName}</span> <br />
                <i>{doc.data().factory}</i>
              </p>
            </div>
            <div className="short-beer-grid">
              <div className="short-grid-item1">Оценка Untappd</div>
              <div className="short-grid-item2">{`${
                doc.data().untappd
              } из 5`}</div>
              <div className="short-grid-item1">Алкоголь</div>
              <div className="short-grid-item2">{`${doc.data().abv}% об.`}</div>
              <div className="short-grid-item1">Плотность</div>
              <div className="short-grid-item2">{`${doc.data().fg}%`}</div>
              <div className="short-grid-item1">Горечь (IBU)</div>
              <div className="short-grid-item2">{doc.data().ibu}</div>
            </div>

            <div className="short-beer-date-flavour">
              <div className="short-date">{`Дата дегустации: ${
                doc.data().date
              }`}</div>
              <div className="short-flavour">
                Основные вкусы: <strong>{doc.data().flavours}</strong>
              </div>
            </div>
          </div>
        );
      });
      setCardsShort(beerCardsShortList);
    });
  }, []);

  return <div>{cardsShort}</div>;
};

export default BeerCardShort;
