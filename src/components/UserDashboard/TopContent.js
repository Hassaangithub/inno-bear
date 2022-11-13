import React, {useState} from 'react';
import NotificationBing from '../../images/notification-bing.png';
import UserPic from '../../images/profile-img.png';
import {useNavigate} from 'react-router-dom';
import {handleLogout} from '../../utility';
import CustomModal from '../CustomModal';

const TopContent = ({isProfile}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const SubmitModal = () => {
    setShow(false);
    handleLogout();
    navigate('/sign-in');
  };

  return (
    <div className="d-flex align-items-center col-lg-6 ml-lg-auto">
      <CustomModal
        show={show}
        handleClose={handleClose}
        onSubmit={SubmitModal}
        submitTxt="Sign out">
        <div className="modal-body mt-5 text-center">
          Are you sure you want to log out?
        </div>
      </CustomModal>
      <button className="d-lg-none d-md-inline-block btn mr-3" id="menuToggle">
        <span className="fa fa-bars text-white"></span>
      </button>
      <input
        type="text"
        className={`form-control search-field ${!isProfile && 'visible'}`}
        placeholder="Search for challenges here"
      />
      <div className="mx-4 notifications-holder">
        <img src={NotificationBing} alt="notification-bing" />
      </div>
      <div className="navbar p-0">
        <div className="dropdown ml-auto">
          <a
            className="p-0 dropdown-toggle"
            role="button"
            id="profContentBtn"
            data-toggle="dropdown"
            aria-expanded="false">
            <img src={UserPic} className="profile-user-pic" />
          </a>
          <div className="dropdown-menu dropdown-menu-right animated-dropdown slideIn w-100 border-0 dark-box-shadow">
            <b className="text-muted text-uppercase d-block mb-2 user-name-text">
              User Menu
            </b>
            <a className="dropdown-item" onClick={() => navigate('/dashboard')}>
              <span className="fa fa-user mr-2"></span>Dashboard
            </a>
            <a
              className="dropdown-item"
              onClick={() => navigate('/edit-profile')}>
              <span className="fa fa-user-alt mr-2"></span>My Profile
            </a>
            <hr className="my-1" />
            <a className="dropdown-item" onClick={() => setShow(true)}>
              <span className="fa fa-sign-out-alt mr-2"></span>Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
