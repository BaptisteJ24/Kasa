import React from 'react';
import '../../styles/Gallery.scss';
import Card from '../Card';
import { getData } from '../../utils/get';

const housing = await getData('/data.json');

const Gallery = ({ page }) => {
  return (
    <ul className={`gallery ${page}__gallery`}>
      {housing.map((item) => {
        return <Card key={item.id} housing={item} page={page} />;
      })}
    </ul>
  );
};

export default Gallery;
