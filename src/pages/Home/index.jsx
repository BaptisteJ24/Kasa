import React, { useEffect } from 'react';
import Gallery from '../../components/Gallery';
import Banner from '../../components/Banner';
import '../../styles/Home.scss';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Banner title="Chez vous, partout et ailleurs" page="home" />
      <section className="housing">
        <Gallery />
      </section>
    </React.Fragment>
  );
}

export default Home;
