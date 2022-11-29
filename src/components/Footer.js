import React from 'react';
import {Link} from 'react-router-dom';
import footerlogo from '../images/footerlogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row container-fluid mt-md-4 pt-md-0 pt-3 mx-auto">
        <div className="col-md-3 px-sm-3 px-0">
          <Link
            className="navbar-brand overflow-hidden auth-icon-wrapper"
            to="/">
            <img
              src={footerlogo}
              alt="main-account-auth-logo"
              className="auth-icon"
            />
          </Link>
          <p className="text-white mt-md-0 mt-3">
            Tapping into human brilliance to create innovative and scalable
            solutions.
          </p>
          <div className="mt-lg-5 mb-md-0 my-3 d-flex flex-wrap">
            <a
              href="/www.facebook.org/immobear"
              className="text-decoration-none">
              <span className="fab fa-facebook-f social-media-link"></span>
            </a>
            <a href="#" className="mx-3 text-decoration-none">
              <span className="fab fa-instagram social-media-link"></span>
            </a>
            <a href="#" className="text-decoration-none">
              <span className="fab fa-twitter social-media-link"></span>
            </a>
          </div>
        </div>
        <div className="col-sm-6 px-sm-3 px-0 d-md-flex justify-content-md-center">
          <div>
            <h5 className="text-white mb-md-3 mb-2 main-heading">Features</h5>
            <ul className="list-style-none">
              <li>
                <Link to="/challenges" className="text-white">
                  Challenges
                </Link>
              </li>
              <li>
                <Link to="/host-challenge" className="text-white">
                  Host a Challenge
                </Link>
              </li>
              <li>
                <Link to="/starter-kit" className="text-white">
                  Starter Kit
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-white">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 px-sm-3 px-0 col-sm-6">
          <h5 className="text-white mb-md-3 mb-2 main-heading">Support</h5>
          <ul className="list-style-none">
            <li>
              <Link to="/about-us" className="text-white">
                About us
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/privacy-&-policy" className="text-white">
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link to="/help" className="text-white">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white text-center mx-sm-4 mx-3 mt-md-4 mb-0 py-4 copy-right">
        Copyright 2022 All right reserved / Floor23 Digital, LLC
      </p>
    </footer>
  );
};

export default Footer;
