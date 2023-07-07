import icon from '../../assets/kasa_icon.svg';

const Loader = () => {
  return (
    <div className="loader">
      <span className="loader__spinner"></span>
      <img className="loader__icon" src={icon} alt="kasa icon" />
      <p className="loader__text">Chargement</p>
    </div>
  );
};

export default Loader;
