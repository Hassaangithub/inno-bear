import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import accountAuth from '../images/account-auth-logo.png';

const TopNav = () => {
  let location = useLocation();
  const navItems = [
    {
      path: '/home',
      title: 'Home',
      key: '1',
    },
    {
      path: '/challenges',
      title: 'Challenges',
      key: '2',
    },
    {
      path: '/pricing',
      title: 'Pricing',
      key: '3',
    },
    {
      path: '/contact-us',
      title: 'Contact Us',
      key: '4',
    },
    {
      path: '/starter-kit',
      title: 'Starter Kit',
      key: '5',
    },
    {
      path: '/host-challenge',
      title: 'Host a Challenge',
      key: '6',
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-sm-4 px-3 py-sm-3 py-2 header-navbar">
      <Link to="/home" className="navbar-brand">
        <img src={accountAuth} alt="main-account-auth-logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="fa fa-bars"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          {navItems.map(item => (
            <li
              className={`nav-item ${
                item.path === location.pathname && 'active'
              }`}
              key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.title} <span className="sr-only">(current)</span>
              </Link>
            </li>
          ))}
        </ul>
        <form className="my-lg-2 my-lg-0 d-flex justify-content-center">
          <Link to="/sign-in" className="btn sign-in-btn">
            Sign in
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default TopNav;
