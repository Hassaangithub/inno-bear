import React from 'react';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import {useNavigate} from 'react-router-dom';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import TopContent from '../components/UserDashboard/TopContent';
import Footer from '../components/Footer';
import profileImg from '../images/profileeditimage.png';
import editIcon from '../images/profileedit.png';

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
        <TopContent isProfile={true} />
        <div style={{paddingBottom: '351px'}}>
          <div className="profile m-5">
            <div className="profileInner m-5">
              <h1>Profile</h1>
              <div className="profileEditImage">
                <a href="">
                  <img src={profileImg} alt="profile" />
                </a>
                <a href="" className="profileEdit">
                  <img src={editIcon} alt="" />
                </a>
              </div>

              <form className="m-5 profileForm">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputfirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputfirstName"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputlastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputlastName"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailAddress"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" className="form-control" id="phone" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="country">Country</label>
                    <input
                      type="number"
                      className="form-control"
                      id="country"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="profile m-5  ">
            <div className="profileInner m-5">
              <form className="m-5 profileForm">
                <h3>Password</h3>
                <p>Manage your Innobear Password</p>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="changePassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="changePassword"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <button type="submit" className="btn changebtn">
                      Change
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

export default EditProfile;
