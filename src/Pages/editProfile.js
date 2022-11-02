import React from 'react';
import AccountAuthLogo from '../images/account-auth-logo.png';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import Vector3 from '../images/Vector-3.png';
import Vector4 from '../images/Vector-4.png';
import Logout from '../images/logout.png';
import NotificationBing from '../images/notification-bing.png';
import UserPic from '../images/profile-img.png';
import CelebPic from '../images/celeb.png';
import EditIcon from '../images/edit-icon.png';
import BinPic from '../images/bin.png';
import Rectangle35 from '../images/rectangle-35.png';
import Vector5 from '../images/vector-5.png';
import Vector6 from '../images/vector-6.png';
import Vector7 from '../images/vector-7.png';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {fetchStats} from '../Services/dashboard';
import {handleLogout} from '../utility';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <DashboardSidebar
        list={[
          {
            img: FluentPeople,
            title: 'Edit Profile',
            path: '/edit-profile',
          },
          {
            img: OutlineWork,
            title: 'Reset Password',
            path: '/reset-password',
          },
          {
            img: Vector,
            title: 'Notification Settings',
            path: '/notification-setting',
          },
          {
            img: Vector1,
            title: 'Support',
            path: '/support',
          },
        ]}
      />

      <div
        className="right_main pr-lg-3 pt-4 pb-5 bg-white"
        id="dashboardSidebarRightContent">
        <div className="d-flex align-items-center col-lg-6 ml-lg-auto">
          <button
            className="d-lg-none d-md-inline-block btn mr-3"
            id="menuToggle">
            <span className="fa fa-bars text-white"></span>
          </button>

          <div className="navbar p-0 w-100">
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

                <hr className="my-1" />
                <a className="dropdown-item" onClick={handleLogout}>
                  <span className="fa fa-sign-out-alt mr-2"></span>Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
