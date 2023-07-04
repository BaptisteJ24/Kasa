import '../../styles/Banner.scss';

const Banner = ({ title, page }) => {
  return (
    <div className={`banner ${page}__banner`}>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

export default Banner;
