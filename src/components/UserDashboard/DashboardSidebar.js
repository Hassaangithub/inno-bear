import React, {Children, useState} from 'react';
import AccountAuthLogo from '../../images/account-auth-logo.png';
import {Link, useNavigate} from 'react-router-dom';
import Logout from '../../images/logout.png';
import {handleLogout} from '../../utility';
import CustomModal from '../CustomModal';
import Footer from '../Footer';
import TopContent from './TopContent';

const DashboardSidebar = ({list, footer, children, isProfile}) => {
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
    <>
      <CustomModal
        show={show}
        handleClose={handleClose}
        onSubmit={SubmitModal}
        submitTxt="Sign out"
        isFooter>
        <div className="modal-body mt-5 text-center mb-4">
          Are you sure you want to log out?
        </div>
      </CustomModal>
      <div id="sideNavOverlay" className="d-none" />
      <div id="dashboardSidebar">
        <div className="auth-icon-wrapper">
          <img
            className="auth-icon"
            src={AccountAuthLogo}
            onClick={() => navigate('/home')}
            role="button"
          />
        </div>
        <aside className="side-nav">
          <ul className="mb-0 side-nav-links">
            {list?.map((item, index) => (
              <li key={index} className="position-relative">
                <Link to={item.path} className="d-block sidebar-links">
                  <img src={item.img} alt="fluent-people" className="mr-2" />
                  {item.title}
                </Link>
              </li>
            ))}

            <li className="position-relative logout-block">
              <a
                href="#"
                className="d-block sidebar-links"
                onClick={() => setShow(true)}>
                <img src={Logout} alt="logout" className="mr-2" />
                Log out
              </a>
            </li>
          </ul>
        </aside>
      </div>
      <div
        className="right_main pr-lg-3 pt-4 pb-5"
        id="dashboardSidebarRightContent">
        <TopContent isProfile={isProfile} />
        {children}
      </div>
      {footer && <Footer />}
    </>
  );
};

export default DashboardSidebar;


