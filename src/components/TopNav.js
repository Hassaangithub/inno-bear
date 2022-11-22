import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import accountAuth from '../images/account-auth-logo.png';
import {getProfileData} from '../Services/profile';

const TopNav = ({dashboard}) => {
  const navigate = useNavigate();

  let location = useLocation();
  const pathName = '/' + location.pathname.split('/')[1];
  const user = localStorage.getItem('token');
  // const profileImg = localStorage.getItem('image');
  const [profileImg, setProfileImg] = useState();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.clear();
    navigate('/sign-in');
  };
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

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getProfileData();
      if (response.successData) {
        setProfileImg(response.successData.user.image);
      }
      // else {
      //   toast.error(response.response.data.message);
      // }
    };
    fetchProfile();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-sm-4 px-3 py-sm-3 py-2 header-navbar">
      <Link to="/" className="navbar-brand">
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
        <span className="fa fa-bars text-white"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {!dashboard && (
          <ul className="navbar-nav mx-auto">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${
                  ((item.path === 'Home' && pathName === '/') ||
                    item.path === pathName) &&
                  'active'
                }`}>
                <Link to={item.path} className="nav-link">
                  {item.title} <span className="sr-only">(current)</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {!user ? (
          <form className="my-lg-2 my-lg-0 d-flex justify-content-center">
            <Link to="/sign-in" className="btn sign-in-btn">
              Sign in
            </Link>
          </form>
        ) : (
          <div
            className="right_main navbar p-0 rounded-circle"
            style={{marginLeft: 'auto'}}>
            <div className="dropdown ml-auto">
              <a
                className="p-0 dropdown-toggle text-decoration-none"
                role="button"
                id="profContentBtn"
                data-toggle="dropdown"
                aria-expanded="false">
                {profileImg ? (
                  <img src={profileImg} className="profile-user-pic" />
                ) : (
                  <div
                    className="profile-user-pic d-flex align-items-center justify-content-center text-white"
                    style={{
                      background: '#9e9e9e',
                      fontSize: '26px',
                    }}>
                    {localStorage.getItem('email')[0].toUpperCase()}
                  </div>
                )}
              </a>
              <div className="dropdown-menu dropdown-menu-right animated-dropdown slideIn w-100 border-0 dark-box-shadow">
                <b className="text-muted text-uppercase d-block mb-2 user-name-text">
                  User Menu
                </b>
                <a
                  className="dropdown-item"
                  onClick={() => navigate('/dashboard')}>
                  <span className="fa fa-user-alt mr-2"></span>Dashboard
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => navigate('/edit-profile')}>
                  <span className="fa fa-user-alt mr-2"></span>My Profile
                </a>
                <hr className="my-1" />
                <a className="dropdown-item" onClick={handleLogout}>
                  <span className="fa fa-sign-out-alt mr-2"></span>Logout
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
