import React, { useEffect, useState } from 'react';
import Navbar from '../header/navbar';
import './degustation.scss';
import firebase from '../../firebase';

const Degustation = () => {
  const [cards, setCards] = useState(null);
  const db = firebase.firestore();

  useEffect(() => {
    db.collection('Degustation')
      .get()
      .then((snapshot) => {
        const beerCardsList = snapshot.docs.map((doc) => {
          return (
            <div key={doc.id} className="beer-card">
              <div className="beer-name">
                <p>
                  <span>{doc.data().beerName}</span> <br />
                  <i>{doc.data().factory}</i>
                </p>
              </div>
              <div className="beer-grid">
                <div className="grid-item1">Классификация по BJCP</div>
                <div className="grid-item2">{doc.data().bjcp}</div>
                <div className="grid-item1 ml">Оценка Untappd</div>
                <div className="grid-item2">{`${doc.data().untappd} из 5`}</div>
                <div className="grid-item1">Алкоголь</div>
                <div className="grid-item2">{`${doc.data().abv}% об.`}</div>
                <div className="grid-item1 ml">Плотность</div>
                <div className="grid-item2">{`${doc.data().fg}%`}</div>
                <div className="grid-item1">Горечь (IBU)</div>
                <div className="grid-item2">{doc.data().ibu}</div>
                <div className="grid-item1 ml">Тара</div>
                <div className="grid-item2">{doc.data().pack}</div>
              </div>

              <div className="beer-date-flavour">
                <div className="date">{`Дата дегустации: ${
                  doc.data().date
                }`}</div>
                <div className="flavour">
                  Основные вкусы: <strong>{doc.data().flavours}</strong>
                </div>
              </div>
              <div className="beer-discription">
                <div className="disc-head">Описание</div>
                <div className="disc-text">{doc.data().disc}</div>
              </div>
            </div>
          );
        });
        setCards(beerCardsList);
      });
  }, [db]);

  return (
    <React.Fragment>
      <Navbar />
      <section id="degustation" className="container content">
        <div className="degustation-heading ">
          <h1 className="bottom-line">ДЕГУСТАЦИИ</h1>
        </div>

        {cards}
      </section>
    </React.Fragment>
  );
};

export default Degustation;
