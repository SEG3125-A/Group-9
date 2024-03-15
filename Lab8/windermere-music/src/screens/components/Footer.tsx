import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="text-center text-dark mt-5" style={{ backgroundColor: "#797674", color:"black" }}>
      <div className="container pt-3">
        <h6 className="text-dark" style={{ fontSize: "18px" }}>Connect with us through our socials</h6>
        <section className="mb-3">
          <SocialIcon className="m-1" url="https://www.instagram.com/" />
          <SocialIcon className="m-1" url="https://www.tiktok.com/" />
          <SocialIcon className="m-1" url="https://www.facebook.com/" />
          <SocialIcon className="m-1" url="http://linkedin.com/" />
          <SocialIcon className="m-1" url="https://twitter.com/" />

        </section>
      </div>
      <div className="custom-navbar text-black d-flex align-items-center justify-content-center p-3" >
        <span style={{ color: "black" }}>Windermere Music Club © {new Date().getFullYear()}. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
