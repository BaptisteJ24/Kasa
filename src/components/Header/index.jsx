import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../styles/Header.scss';

const Header = () => {
  return (
    <header className="header" role="banner">
      <img className="header__logo" src={logo} alt="logo" />
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__link">
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
