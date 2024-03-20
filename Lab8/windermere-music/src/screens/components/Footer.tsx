import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import icon from '../../images/icon2.png'

const Footer = () => {
  return (
    <footer className="text-center text-dark mt-5" style={{ backgroundColor: "#797674", color: "white" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 footer-title">
            <img className="icon-image" src={icon}></img>
            <h5 style={{fontFamily: 'Brush Script MT', fontSize: '20px'}}>Windermere Music Club</h5>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-start">
            <address>
              <h6 className="text-dark" style={{ fontSize: "18px" }}>Location</h6>
              75 Laurier Ave E, Ottawa, ON K1N 6N5<br />
              Phone number: +1 212 799-5000<br />
              Email: windermereMC@gmail.com
            </address>
          </div>
          <div className="col-md socials flex-column justify-content-start align-items-start">
            <h6 className="text-dark" style={{ fontSize: "18px" }}>Socials</h6>
            <section className="mb-3 socials d-flex align-items-center">
              <div className="d-flex align-items-center mr-3">
                <FontAwesomeIcon icon={faInstagram} className="m-1 social-media-icon" />
                <p className="mb-0 ml-1">Instagram</p>
              </div>
              <div className="d-flex align-items-center mr-3">
                <FontAwesomeIcon icon={faTiktok} className="m-1 social-media-icon" size="lg" />
                <p className="mb-0 ml-1">Tiktok</p>
              </div>
              <div className="d-flex align-items-center mr-3">
                <FontAwesomeIcon icon={faFacebook} className="m-1 social-media-icon" size="1x" />
                <p className="mb-0 ml-1">Facebook</p>
              </div>
              <div className="d-flex align-items-center mr-">
                <FontAwesomeIcon icon={faLinkedin} className="m-1 social-media-icon" size="lg" />
                <p className="mb-0 ml-1">Linkedin</p>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faTwitter} className="m-1 social-media-icon" size="lg" />
                <p className="mb-0 ml-1">Twitter</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="custom-navbar text-black d-flex align-items-center justify-content-center p-3">
        <span style={{ color: "black" }}>Windermere Music Club © {new Date().getFullYear()}. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
