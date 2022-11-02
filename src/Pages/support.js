import React from 'react';
import Footer from '../components/Footer';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import TopContent from '../components/UserDashboard/TopContent';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';

const Support = () => {
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
          <div className="profile m-5  ">
            <div className="profileInner m-5">
              <h3>Contact Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <div className="col-lg-6 contactLabel">
                <label htmlFor="subject">Subject</label> <br />
                <div className="border subjectSelect">
                  <select
                    className="form-select"
                    aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6"></div>
              <div className="col-lg-6 contactLabel mt-3">
                <label htmlFor="Message">Message</label> <br />
                <div className="border subjectMessage">
                  <textarea name="" id="" cols="50" rows="10"></textarea>
                </div>
              </div>
              <div className="col-lg-6"></div>
              <div className="col-lg-6 mt-5">
                <button type="submit" className="btn btn-primary  resetbtn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Support;