import { Link } from 'react-router-dom';

const Card = ({ housing, page }) => {
  return (
    <li className={`card ${page}__card`}>
      <Link to={`/housing/${housing.id}`} className="card__link">
        <img className="card__img" src={housing.cover} alt={housing.title} />
        <h2 className="card__title">{housing.title}</h2>
      </Link>
    </li>
  );
};

export default Card;
