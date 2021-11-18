import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import './degustation.scss';

import Navbar from '../header/navbar';
import BeerCard from './beer-card';

import db from '../../firebase';

const Degustation = () => {
  const [ cards, setCards ] = useState(null);
  const snap = getDocs(collection(db, 'Degustation'));

  useEffect(() => {
    snap.then((snapshot) => {
      const beerCardsList = snapshot.docs.map((doc) => (
        <BeerCard
          key={doc.id}
          beerName={doc.data().beerName}
          factory={doc.data().factory}
          bjcp={doc.data().bjcp}
          untappd={doc.data().untappd}
          abv={doc.data().abv}
          fg={doc.data().fg}
          ibu={doc.data().ibu}
          pack={doc.data().pack}
          date={doc.data().date}
          flavours={doc.data().flavours}
          disc={doc.data().disc}
        />
      ));
      setCards(beerCardsList);
    });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <section className="degustation container content">
        <div className="degustation-heading ">
          <h1 className="bottom-line">ДЕГУСТАЦИИ</h1>
        </div>

        {cards}
      </section>
    </React.Fragment>
  );
};

export default Degustation;
