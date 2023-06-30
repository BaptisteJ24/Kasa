import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../Error';
import Carousel from '../../components/Carousel';
import DropdownList from '../../components/DropdownList';
import { getDataById } from '../../utils/get';
import '../../styles/Housing.scss';

const Housing = () => {
  const { housingId } = useParams();
  const [housingData, setHousingData] = useState(null);
  const [ratingStars, setRatingStars] = useState(0);

  const createRatingStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        className={`fas fa-star housing__rating-star ${
          index < ratingStars && 'housing__rating-star--active'
        }`}
        key={'star' + index}
      ></i>
    ));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const housingData = await getDataById('/data.json', housingId);
        setHousingData(housingData);
        setRatingStars(parseInt(housingData.rating));
      } catch (error) {
        console.log('error', error);
        return <Error />;
      }
    };
    fetchData();
  }, [housingId]);

  if (housingData && housingData.length !== 0) {
    return (
      <section className="housing">
        <Carousel
          className="housing__carousel"
          pictures={housingData.pictures}
          altText={housingData.title}
        />
        <div>
          <h1 className="housing__title">{housingData.title}</h1>
          <p className="housing__location">{housingData.location}</p>
          <p className="housing__tags">
            {housingData.tags.map((tag) => (
              <span className="housing__tag" key={tag}>
                {tag}
              </span>
            ))}
            ;
          </p>
        </div>
        <div>
          <div className="housing__host">
            <div className="housing__host-picture">
              <img
                src={housingData.host.picture}
                alt={housingData.host.name + 'profile picture'}
              />
            </div>
            <div className="housing__host-name">
              <p>{housingData.host.name.split(' ')[0]}</p>
              <p>{housingData.host.name.split(' ')[1]}</p>
            </div>
          </div>
          <div className="housing__rating">{createRatingStars()}</div>
        </div>
        <div>
          <DropdownList
            className="housing__description"
            name="Description"
            value={housingData.description}
          />
          <DropdownList
            className="housing__equipments"
            name="Équipements"
            value={housingData.equipments}
          />
        </div>
      </section>
    );
  } else {
    return <Error />;
  }
};

export default Housing;