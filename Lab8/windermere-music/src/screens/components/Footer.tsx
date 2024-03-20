import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="text-center text-dark mt-5" style={{ backgroundColor: "#797674", color: "black" }}>
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-5 d-flex flex-column justify-content-start align-items-start">
            <h6 className="text-dark" style={{ fontSize: "18px" }}>Location</h6>
            <address>
               Lincoln Center Plaza<br />
              New York, NY 10023<br />
              212-799-5000
            </address>
            <section className="mb-3">
              <FontAwesomeIcon icon={faInstagram} className="m-1 social-media-icon" />
              <FontAwesomeIcon icon={faTiktok} className="m-1 social-media-icon" size="lg" />
              <FontAwesomeIcon icon={faFacebook} className="m-1 social-media-icon" size="1x" />
              <FontAwesomeIcon icon={faLinkedin} className="m-1 social-media-icon" size="lg" />
              <FontAwesomeIcon icon={faTwitter} className="m-1 social-media-icon" size="lg" />
            </section>
          </div>
          {/* Column for social icons */}
          <div className="col-md-4">
            <h6 className="text-dark" style={{ fontSize: "18px" }}>Connect with us through our socials</h6>
          </div>
          {/* Column for other information */}
          <div className="col-md-4">
            <h6 className="text-dark" style={{ fontSize: "18px" }}>Other Information</h6>
            <p>Enter other information here</p>
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
