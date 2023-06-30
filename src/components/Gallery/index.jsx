import React from 'react';
import '../../styles/Gallery.scss';
import Card from '../Card';
import { getData } from '../../utils/get';

const housing = await getData('/data.json');

const Gallery = () => {
  return (
    <ul className="gallery">
      {housing.map((item) => {
        return <Card key={item.id} housing={item} />;
      })}
    </ul>
  );
};

export default Gallery;
