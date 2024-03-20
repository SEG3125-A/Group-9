import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="text-center text-dark mt-5" style={{ backgroundColor: "#797674", color:"black" }}>
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-start align-items-start">
            <h6 className="text-dark" style={{ fontSize: "18px" }}>Location</h6>
            <p>Enter your location information here</p>
          </div>
          <div className="col-md-8">
            <h6 className="text-dark" style={{ fontSize: "18px" }}>Connect with us through our socials</h6>
            <section className="mb-3">
              <SocialIcon className="m-1" url="https://www.instagram.com/" />
              <SocialIcon className="m-1" url="https://www.tiktok.com/" />
              <SocialIcon className="m-1" url="https://www.facebook.com/" />
              <SocialIcon className="m-1" url="http://linkedin.com/" />
              <SocialIcon className="m-1" url="https://twitter.com/" />
            </section>
          </div>
        </div>
      </div>
      <div className="custom-navbar text-black d-flex align-items-center justify-content-center p-3" >
        <span style={{ color: "black" }}>Windermere Music Club © {new Date().getFullYear()}. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
