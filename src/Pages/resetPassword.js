import React from 'react';
import Footer from '../components/Footer';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import TopContent from '../components/UserDashboard/TopContent';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';

const ResetPassword = () => {
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
        <TopContent />
        <div style={{paddingBottom: '351px'}}>
          <div className="profile m-5">
            <div className="profileInner m-5">
              <form className="m-5 profileForm">
                <h3>Reset Password</h3>
                <p>Please enter a new password to reset your password</p>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="currentPassword">Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="currentPassword"
                    />
                  </div>
                  <div className="form-group col-md-6"></div>
                  <div className="form-group col-md-6">
                    <label for="newPassword">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                    />
                  </div>
                  <div className="form-group col-md-6"></div>
                  <div className="form-group col-md-6">
                    <label for="confirmPassword">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                    />
                  </div>
                  <div className="form-group col-md-6"></div>
                  <div className="form-group col-md-4">
                    <button type="submit" className="btn cancelbtn">
                      Cancel
                    </button>
                  </div>
                  <div className="form-group col-md-8">
                    <button
                      type="button"
                      className="btn btn-group-lg resetbtn text-white"
                      data-toggle="modal"
                      data-target="#exampleModalCenter">
                      Reset Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ResetPassword;
