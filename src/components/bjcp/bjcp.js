import React, { useState } from 'react';
import firebase from '../../firebase';
import Navbar from '../header/navbar';
import Li from './li';
import './bjcp.scss';

const Bjcp = () => {
  const [style, setStyle] = useState('');
  const [disc, setDisc] = useState('');
  const [loading, setLoading] = useState(false);

  const db = firebase.firestore();

  const beerCategory = [
    'Светлый лагер',
    'Пильзнер',
    'Янтарный лагер',
    'Тёмный лагер',
    'Бок',
    'Светлый эль',
    'IPA',
    'Янтарный эль',
    'Коричневый эль',
    'Портер',
    'Стаут',
    'Крепкий эль',
    'Пшеничное пиво',
    'Кислый эль',
    'Особое пиво',
  ];

  const showDisc = (doc) => {
    setDisc(
      <div>
        <h1>{doc.id}</h1>
        <p>{doc.data().disc}</p>
        <h2>Аромат:</h2>
        <p>{doc.data().aroma}</p>
        <h2>Внешний вид:</h2>
        <p>{doc.data().look}</p>
        <h2>Вкус:</h2>
        <p>{doc.data().taste}</p>
        <h2>Ощущение во рту:</h2>
        <p>{doc.data().sense}</p>
        <h2>Комментарии:</h2>
        <p>{doc.data().comment}</p>
        <h2>История:</h2>
        <p>{doc.data().history}</p>
        <h2>Характерные ингредиенты:</h2>
        <p>{doc.data().ingrid}</p>
        <h2>Сравнение стилей:</h2>
        <p>{doc.data().compare}</p>
        <h2>Характеристики:</h2>
        <table>
          <tbody>
            <tr>
              <td>Алкоголь по объему</td>
              <td>{doc.data().specs.abv}</td>
            </tr>
            <tr>
              <td>Начальная плотность</td>
              <td>{doc.data().specs.og}</td>
            </tr>
            <tr>
              <td>Конечная плотность</td>
              <td>{doc.data().specs.fg}</td>
            </tr>
            <tr>
              <td>Горечь</td>
              <td>{doc.data().specs.ibu}</td>
            </tr>
            <tr>
              <td>Цвет</td>
              <td>{doc.data().specs.color}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const showStyle = (e) => {
    setLoading(true);
    setStyle('');
    db.collection(e.target.innerText)
      .get()
      .then((snapshot) => {
        const list = snapshot.docs.map((doc) => {
          return (
            <li key={doc.id} onClick={() => showDisc(doc)}>
              {doc.id}
            </li>
          );
        });
        setLoading(false);
        setStyle(list);
      });
  };

  return (
    <React.Fragment>
      <Navbar />
      <section className="bjcp container content">
        <div className="bjcp-heading ">
          <h1 className="bottom-line">
            Классификация пива по <br /> стандарту BJCP(2015)
          </h1>
        </div>
        <br />
        <br />
        <p>
          <strong> BJCP (Beer Judge Certification Program)</strong> - Программа
          сертификации пивных судей - некоммерческая организация, созданная в
          1985 году с целью «пропаганды грамотности в пиве и повышения ценности
          настоящего пива, а также признания навыков дегустации и оценки пива».
        </p>
        <p>
          <br />
          <i>
            *перевод стандарта BJCP - портал пивного рынка{' '}
            <a href="https://profibeer.ru" target="_blank" rel="noreferrer">
              PROFIBEER
            </a>
          </i>
        </p>
        <br />
        <div className="table">
          <div className="category">
            <span>Категория</span>
            <ul onClick={showStyle}>
              <Li items={beerCategory} />
            </ul>
          </div>
          <div className="style">
            <span>Стиль</span>
            <ul>
              {loading ? 'loading...' : null}
              {style}
            </ul>
          </div>
          <div className="discription">
            <span>Описание стиля</span>
            <div className="disc-text">{disc}</div>
          </div>
        </div>
        {/* <div className="bjcp-head">
          <div className="head-category"></div>
          <ol>
            <li>Категория</li>
            <li>Стиль</li>
            <li className="column-3">Описание стиля</li>
          </ol>
        </div>
        <div className="table-area">
          <div className="flex">
            
            <div className="table-cells flex-column">
              <ul onClick={showStyle}>{listCategory}</ul>
            </div>
          </div>

         
          <div id="style-column">
            <div id="style" className="flex-column">
              <ul>
                {loading ? 'loading' : null}
                {style}
              </ul>
            </div>
          </div>

          
          <div id="discription" className="flex-column">
            <div>{disc}</div>
          </div>
        </div> */}
      </section>
    </React.Fragment>
  );
};

export default Bjcp;
