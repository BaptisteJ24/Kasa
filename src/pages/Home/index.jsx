import React from 'react';
import '../../styles/Home.scss';
import Gallery from '../../components/Gallery';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <section className="home-banner">
        <h1 className="home-banner__title">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="housing">
        <Gallery />
      </section>
    </React.Fragment>
  );
}

export default Home;
