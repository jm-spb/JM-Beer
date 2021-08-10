import React from 'react';
import './App.scss';
import SimpleReactLightbox from 'simple-react-lightbox';
import Main from './components/main/main';
// import Technology from './components/technology/technology';
// import Footer from './components/footer/footer';
// import Bjcp from './components/bjcp/bjcp';
import Route from './components/route/route';
// import Degustation from './components/degustation/degustation';

// const Route = React.lazy(() => import('./components/route/route'));
// const Main = React.lazy(() => import('./components/main/main'));
const Technology = React.lazy(() =>
  import('./components/technology/technology')
);
const Bjcp = React.lazy(() => import('./components/bjcp/bjcp'));
const Degustation = React.lazy(() =>
  import('./components/degustation/degustation')
);
const Footer = React.lazy(() => import('./components/footer/footer'));

const App = () => {
  return (
    <>
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

      <React.Suspense fallback={<span>loading...</span>}>
        <Footer />
      </React.Suspense>
    </>
  );
};

export default App;
