import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import icon from '../../images/icon2.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center text-dark mt-5 footer-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 footer-title">
            <img className="icon-image" src={icon} alt="icon"></img>
            <h5 style={{ fontFamily: 'Brush Script MT', fontSize: '20px', color: "#EAE7E2" }}>{t('clubName')}</h5>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-start">
            <address style={{ color: "#EAE7E2" }}>
              <h6 style={{ fontSize: "18px" }}>{t('footerLocation')}</h6>
              {t('footerAddress')}<br />
              {t('footerPhone')}<br />
              {t('footerEmail')} <a href="mailto:windermereMC@gmail.com" style={{ color: "#EAE7E2" }}>windermereMC@gmail.com</a>
            </address>
          </div>
          <div className="col-md-5 socials flex-column justify-content-start align-items-start">
            <h6 style={{ fontSize: "18px", color: "#EAE7E2" }}>{t('footerSocials')}</h6>
            <section className="mb-3 socials d-flex align-items-center">
              <div className="d-flex align-items-center mr-3" id="icon-container">
                <FontAwesomeIcon icon={faInstagram} className="m-1 social-media-icon" color='#EAE7E2' />
                <p className="mb-0 ml-1" style={{ color: "#EAE7E2" }}>Instagram</p>
              </div>
              <div className="d-flex align-items-center mr-3" id="icon-container">
                <FontAwesomeIcon icon={faYoutube} className="m-1 social-media-icon" color='#EAE7E2' />
                <p className="mb-0 ml-1" style={{ color: "#EAE7E2" }}>YouTube</p>
              </div>
              <div className="d-flex align-items-center mr-3" id="icon-container">
                <FontAwesomeIcon icon={faTiktok} className="m-1 social-media-icon" color='#EAE7E2' />
                <p className="mb-0 ml-1" style={{ color: "#EAE7E2" }}>Tiktok</p>
              </div>
              <div className="d-flex align-items-center mr-3" id="icon-container">
                <FontAwesomeIcon icon={faFacebook} className="m-1 social-media-icon" color='#EAE7E2' />
                <p className="mb-0 ml-1" style={{ color: "#EAE7E2" }}>Facebook</p>
              </div>
              <div className="d-flex align-items-center mr-3" id="icon-container">
                <FontAwesomeIcon icon={faLinkedin} className="m-1 social-media-icon" color='#EAE7E2' />
                <p className="mb-0 ml-1" style={{ color: "#EAE7E2" }}>Linkedin</p>
              </div>
              <div className="d-flex align-items-center mr-3" id="icon-container">
                <FontAwesomeIcon icon={faTwitter} className="m-1 social-media-icon" color='#EAE7E2' />
                <p className="mb-0 ml-1" style={{ color: "#EAE7E2" }}>Twitter</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="custom-navbar text-black d-flex align-items-center justify-content-center p-3">
        <span style={{ color: "#EAE7E2" }}>{t('clubName')} © {new Date().getFullYear()}. {t('footerCopyright')}.</span>
      </div>
    </footer>
  );
};

export default Footer;
