import React, { useEffect } from 'react';
import Gallery from './../../components/Gallery';
import Banner from './../../components/Banner';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Banner title={`Chez vous,\n partout et ailleurs`} page="home" />
      <section className="home__housing">
        <Gallery page="home" />
      </section>
    </React.Fragment>
  );
}

export default Home;
