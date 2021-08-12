import React, { useState } from 'react';

const BeerCard = ({
  beerName,
  factory,
  bjcp,
  untappd,
  abv,
  fg,
  ibu,
  pack,
  date,
  flavours,
  disc,
}) => {
  const [showDisc, setShowDisc] = useState(false);

  return (
    <div className="beer-card">
      <div className="beer-name">
        <p>
          <span>{beerName}</span> <br />
          <i>{factory}</i>
        </p>
      </div>
      <div className="beer-grid">
        <div className="grid-item1">Классификация по BJCP</div>
        <div className="grid-item2">{bjcp}</div>
        <div className="grid-item1">Оценка Untappd</div>
        <div className="grid-item2">{`${untappd} из 5`}</div>
        <div className="grid-item1">Алкоголь</div>
        <div className="grid-item2">{`${abv}% об.`}</div>
        <div className="grid-item1">Плотность</div>
        <div className="grid-item2">{fg}</div>
        <div className="grid-item1">Горечь (IBU)</div>
        <div className="grid-item2">{ibu}</div>
        <div className="grid-item1">Тара</div>
        <div className="grid-item2">{pack}</div>
      </div>

      <div className="beer-date-flavour">
        <div className="date">{`Дата дегустации: ${date}`}</div>
        <div className="flavour">
          Основные вкусы: <strong>{flavours}</strong>
        </div>
      </div>
      <div className="beer-discription">
        <div className="disc-head">Описание</div>

        {showDisc ? <div className="disc-text">{disc}</div> : null}
        <span className="show-disc" onClick={() => setShowDisc(!showDisc)}>
          {showDisc ? 'Скрыть' : 'Показать'}
        </span>
      </div>
    </div>
  );
};

export default BeerCard;
