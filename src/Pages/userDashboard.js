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

const UserDashboard = () => {
  return (
    <>
      <div id="sideNavOverlay" className="d-none"></div>
      <div id="dashboardSidebar">
        <img src={AccountAuthLogo} />
        <aside className="side-nav">
          <ul className="mb-0 side-nav-links">
            <li className="position-relative">
              <a href="#" className="d-block sidebar-links">
                <img src={FluentPeople} alt="fluent-people" className="mr-2" />
                Team
              </a>
            </li>
            <li className="position-relative active">
              <a href="#" className="d-block sidebar-links">
                <img src={OutlineWork} alt="outline-work" className="mr-2" />
                Challenges
              </a>
            </li>
            <li className="position-relative">
              <a href="#" className="d-block sidebar-links">
                <img src={Vector} alt="Vector" className="mr-2" />
                Innovation Pipiline
              </a>
            </li>
            <li className="position-relative">
              <a href="#" className="d-block sidebar-links">
                <img src={Vector1} alt="Vector-1" className="mr-2" />
                Messages
              </a>
            </li>
            <li className="position-relative">
              <a href="#" className="d-block sidebar-links">
                <img src={Vector3} alt="Vector-3" className="mr-2" />
                Admin Settings
              </a>
            </li>
            <li className="position-relative">
              <a href="#" className="d-block sidebar-links">
                <img src={Vector4} alt="Vector-4" className="mr-2" />
                Innovation Library
              </a>
            </li>
            <li className="position-relative">
              <a href="#" className="d-block sidebar-links">
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
        <div className="d-flex align-items-center col-lg-6 ml-lg-auto">
          <button
            className="d-lg-none d-md-inline-block btn mr-3"
            id="menuToggle">
            <span className="fa fa-bars text-white"></span>
          </button>
          <input
            type="text"
            className="form-control search-field"
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
                <a className="dropdown-item" href="#">
                  <span className="fa fa-user-alt mr-2"></span>My Profile
                </a>
                <hr className="my-1" />
                <a className="dropdown-item" href="#">
                  <span className="fa fa-sign-out-alt mr-2"></span>Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 px-4 d-flex flex-wrap justify-content-between align-items-center">
          <h3 className="mb-0 user-name">
            Hello, Jennifer! <img src={CelebPic} alt="celeb" className="ml-3" />
          </h3>
          <button className="btn text-white">Host a Challenge</button>
        </div>
        <div className="row col-lg-11">
          <div className="col-md-4 col-sm-6 mb-md-0 mb-3">
            <div className="block-mode">
              <a href="#" className="block-mode-icon block-mode-icon1">
                <img src={EditIcon} alt="edit-icon" />
              </a>
              <p className="my-2 d-flex align-items-center">
                Total challenges <span className="fa fa-question ml-3"></span>
              </p>
              <h2 className="font-unset">24</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-md-0 mb-3">
            <div className="block-mode">
              <a href="#" className="block-mode-icon block-mode-icon2">
                <img src={BinPic} alt="bin" />
              </a>
              <p className="my-2 d-flex align-items-center">
                Submitted Ideas <span className="fa fa-question ml-3"></span>
              </p>
              <h2 className="font-unset">24</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-md-0 mb-3">
            <div className="block-mode">
              <a href="#" className="block-mode-icon block-mode-icon3">
                <img src={EditIcon} alt="edit-icon" />
              </a>
              <p className="my-2 d-flex align-items-center">
                Ongoing Challenges <span className="fa fa-question ml-3"></span>
              </p>
              <h2 className="font-unset">24</h2>
            </div>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h5>Submitted Challenges</h5>
            <a href="#" className="text-muted">
              View more
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
            <div className="p-3 current-challenge-block">
              <img src={Rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p className="mb-0">Theoretical</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
            <div className="p-3 current-challenge-block">
              <img src={Rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p className="mb-0">Theoretical</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
            <div className="p-3 current-challenge-block">
              <img src={Rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p className="mb-0">Theoretical</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
            <div className="p-3 current-challenge-block">
              <img src={Rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p className="mb-0">Theoretical</p>
            </div>
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-12 d-flex flex-wrap justify-content-between my-4">
            <h5>See other challenges you might like</h5>
            <a href="#" className="text-muted">
              View more
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
            <div className="p-3 current-challenge-block">
              <img src={Rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p className="mb-0">Theoretical</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
            <div className="p-3 current-challenge-block">
              <img src={Rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p className="mb-0">Theoretical</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
            <div className="p-3 current-challenge-block">
              <img src={Rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p className="mb-0">Theoretical</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
            <div className="p-3 current-challenge-block">
              <img src={Rectangle35} alt="rectangle-35" className="w-100" />
              <h6 className="mt-3 mb-2">
                Healthy food and exercise routine for health
              </h6>
              <p className="mb-0">Theoretical</p>
            </div>
          </div>
        </div>
        <div className="row mx-0 col-12">
          <div className="col-12 my-4">
            <h4>My Challenges</h4>
          </div>
          <div className="table-responsive">
            <table className="table table-striped mb-0">
              <thead>
                <tr>
                  <th className="text-center h6">Challenges</th>
                  <th className="text-center h6">Closing Date</th>
                  <th className="text-center h6">Award</th>
                  <th className="text-center h6">Status</th>
                  <th className="text-center h6">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="w-100 custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="chal1"
                      />
                      <label
                        className="my-1 custom-control-label pass-below-text"
                        for="chal1">
                        AI NASA Challenge
                      </label>
                    </div>
                  </td>
                  <td>1/7/2021</td>
                  <td>
                    <b>$54,000</b>
                  </td>
                  <td>
                    <a href="#" className="badge badge-in-progress">
                      In-progress
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <img src={Vector5} alt="vector-5" />
                    </a>
                    <a href="#">
                      <img src={Vector6} alt="vector-6" />
                    </a>
                    <a href="#">
                      <img src={Vector7} alt="vector-7" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="w-100 custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="chal2"
                      />
                      <label
                        className="my-1 custom-control-label pass-below-text"
                        for="chal2">
                        AI NASA Challenge
                      </label>
                    </div>
                  </td>
                  <td>1/7/2021</td>
                  <td>
                    <b>$54,000</b>
                  </td>
                  <td>
                    <a href="#" className="badge badge-closed">
                      Closed
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <img src={Vector5} alt="vector-5" />
                    </a>
                    <a href="#">
                      <img src={Vector6} alt="vector-6" />
                    </a>
                    <a href="#">
                      <img src={Vector7} alt="vector-7" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="w-100 custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="chal2"
                      />
                      <label
                        className="my-1 custom-control-label pass-below-text"
                        for="chal2">
                        AI NASA Challenge
                      </label>
                    </div>
                  </td>
                  <td>1/7/2021</td>
                  <td>
                    <b>$54,000</b>
                  </td>
                  <td>
                    <a href="#" className="badge badge-active">
                      Active
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <img src={Vector5} alt="vector-5" />
                    </a>
                    <a href="#">
                      <img src={Vector6} alt="vector-6" />
                    </a>
                    <a href="#">
                      <img src={Vector7} alt="vector-7" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="w-100 custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="chal2"
                      />
                      <label
                        className="my-1 custom-control-label pass-below-text"
                        for="chal2">
                        AI NASA Challenge
                      </label>
                    </div>
                  </td>
                  <td>1/7/2021</td>
                  <td>
                    <b>$54,000</b>
                  </td>
                  <td>
                    <a href="#" className="badge badge-closed">
                      Closed
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <img src={Vector5} alt="vector-5" />
                    </a>
                    <a href="#">
                      <img src={Vector6} alt="vector-6" />
                    </a>
                    <a href="#">
                      <img src={Vector7} alt="vector-7" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="w-100 custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="chal2"
                      />
                      <label
                        className="my-1 custom-control-label pass-below-text"
                        for="chal2">
                        AI NASA Challenge
                      </label>
                    </div>
                  </td>
                  <td>1/7/2021</td>
                  <td>
                    <b>$54,000</b>
                  </td>
                  <td>
                    <a href="#" className="badge badge-active">
                      Active
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <img src={Vector5} alt="vector-5" />
                    </a>
                    <a href="#">
                      <img src={Vector6} alt="vector-6" />
                    </a>
                    <a href="#">
                      <img src={Vector7} alt="vector-7" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
