import React from 'react';
import { getData } from '../../utils/get';
import Card from '../Card';

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
