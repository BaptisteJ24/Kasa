import logo from './../../assets/logo_white.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="kasa" className="footer__logo" />
      <p className="footer__text">© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
