import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';

import './App.scss';

import Main from './components/main/main';
import Route from './components/route/route';

const Technology = React.lazy(() => import('./components/technology/technology'));
const Bjcp = React.lazy(() => import('./components/bjcp/bjcp'));
const Degustation = React.lazy(() => import('./components/degustation/degustation'));
const Footer = React.lazy(() => import('./components/footer/footer'));

const App = () => (
  <React.Fragment>
    <SimpleReactLightbox>
      <Route path="/">
        <Main />
      </Route>
    </SimpleReactLightbox>

    <SimpleReactLightbox>
      <Route path="/technology">
        <React.Suspense fallback={<span>loading...</span>}>
          <Technology />
        </React.Suspense>
      </Route>
    </SimpleReactLightbox>

    <Route path="/bjcp">
      <React.Suspense fallback={<span>loading...</span>}>
        <Bjcp />
      </React.Suspense>
    </Route>

    <Route path="/degustation">
      <React.Suspense fallback={<span>loading...</span>}>
        <Degustation />
      </React.Suspense>
    </Route>

    <React.Suspense fallback={<span />}>
      <Footer />
    </React.Suspense>
  </React.Fragment>
);

export default App;
