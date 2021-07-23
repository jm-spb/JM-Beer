import React from 'react';
import './App.scss';
import SimpleReactLightbox from 'simple-react-lightbox';
import Main from './components/main/main';
import Technology from './components/technology/technology';
import Footer from './components/footer/footer';
import Bjcp from './components/bjcp/bjcp';
import Route from './components/route/route';
import Degustation from './components/degustation/degustation';

const App = () => {
  return (
    <SimpleReactLightbox>
      <Route path="/">
        <Main />
      </Route>
      <Route path="/technology">
        <Technology />
      </Route>
      <Route path="/bjcp">
        <Bjcp />
      </Route>
      <Route path="/degustation">
        <Degustation />
      </Route>

      <Footer />
    </SimpleReactLightbox>
  );
};

export default App;
