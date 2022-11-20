import React, {useEffect, useState} from 'react';
import NotificationBing from '../../images/notification-bing.png';
import {useNavigate} from 'react-router-dom';
import {handleLogout} from '../../utility';
import CustomModal from '../CustomModal';
import {getProfileData} from '../../Services/profile';
import {toast} from 'react-toastify';

const TopContent = ({isProfile}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getProfileData();
      if (response.successData) {
        setProfileImg(response.successData.user.image);
      } else {
        toast.error(response.response.data.message);
      }
    };
    fetchProfile();
  }, []);

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
                  fontSize: '20px',
                }}>
                {localStorage.getItem('email')[0].toUpperCase()}
              </div>
            )}
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
