import '../../styles/Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ housing }) => {
  return (
    <li className="card">
      <Link to={`/housing/${housing.id}`} className="card__link">
        <img className="card__img" src={housing.cover} alt={housing.title} />
        <h2 className="card__title">{housing.title}</h2>
      </Link>
    </li>
  );
};

export default Card;
