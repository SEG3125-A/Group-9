import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <p className="location-title">Location</p>
            <p>Example Street, City, Country</p>
          </div>
          <div className="col-sm-6 text-right">
          <p className="location-title">Social Media</p>
            <p className="social-media-icons"></p>
            <SocialIcon className="m-1" url="https://www.instagram.com/" />
            <SocialIcon className="m-1" url="https://www.tiktok.com/" />
            <SocialIcon className="m-1" url="https://www.facebook.com/" />
            <SocialIcon className="m-1" url="http://linkedin.com/" />
            <SocialIcon className="m-1" url="https://twitter.com/" />
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
