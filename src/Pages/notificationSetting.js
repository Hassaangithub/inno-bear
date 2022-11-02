import React from 'react';
import Footer from '../components/Footer';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import TopContent from '../components/UserDashboard/TopContent';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';

const NotificationSetting = () => {
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
          <div className="profile m-5  ">
            <div className="profileInner m-5">
              <h3>Notification Setting</h3>
              <div className="row my-4">
                <div className="col-md-6">
                  <h5>Email Notification</h5>
                  <p>
                    Get emails to find out what is going on when you are not
                    online
                  </p>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-0" className="d-flex">
                      <input type="checkbox" id="toggle-0" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-1" className="d-flex">
                      <input type="checkbox" id="toggle-1" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-2" className="d-flex">
                      <input type="checkbox" id="toggle-2" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-2" className="d-flex">
                      <input type="checkbox" id="toggle-2" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-2" className="d-flex">
                      <input type="checkbox" id="toggle-2" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-6">
                  <h5>Email Notification</h5>
                  <p>
                    Get emails to find out what is going on when you are not
                    online
                  </p>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-6" className="d-flex">
                      <input type="checkbox" id="toggle-6" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-7" className="d-flex">
                      <input type="checkbox" id="toggle-7" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-7" className="d-flex">
                      <input type="checkbox" id="toggle-7" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-8" className="d-flex">
                      <input type="checkbox" id="toggle-8" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6 d-flex">
                  <div className="switcher">
                    <label htmlFor="toggle-8" className="d-flex">
                      <input type="checkbox" id="toggle-8" />
                      <span>
                        <small></small>
                      </span>
                      <h5>Team Invitations</h5>
                    </label>
                    <p className="toggelP">
                      Get emails when you are invited to join a team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default NotificationSetting;
