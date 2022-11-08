import React from 'react';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import Vector3 from '../images/Vector-3.png';
import Vector4 from '../images/Vector-4.png';
import compass from '../images/compas.png';
import {Link} from 'react-router-dom';
import MyChallenges from '../components/UserDashboard/MyChallenges';
import editIcon from '../images/edit-icon.png';
import Clarity from '../images/clarity-administrator-line.png';
import ProjectAdmin from '../components/UserDashboard/ProjectAdmin';
import SubmissionOverTime from '../components/UserDashboard/SubmissionOverTime';

const sidebarlist = [
  {
    img: FluentPeople,
    title: 'Team',
    path: '/team',
  },
  {
    img: OutlineWork,
    title: 'Challenges',
    path: '/challenges',
  },
  {
    img: Vector,
    title: 'Innovation Pipiline',
    path: '/innovation-pipiline',
  },
  {
    img: Vector1,
    title: 'Messages',
    path: '/dashboard/messages',
  },
  {
    img: Vector3,
    title: 'Admin Settings',
    path: '/dashboard/admin-settings',
  },
  {
    img: Vector4,
    title: 'Innovation Library',
    path: '/innovation-library',
  },
];

const AdminSettings = () => {
  return (
    <DashboardSidebar list={sidebarlist}>
      <div className="pl-3">
        <Link to="/challenges">
          <div
            className="pl-3"
            style={{
              color: '#ffc107',
              padding: '10px 0px',
            }}>
            <img src={compass} alt="explore-challenges" />
            &nbsp; Explore Challenges
          </div>
        </Link>
        <div className="row col-lg-11">
          <div className="col-md-4 col-sm-6 mb-md-0 mb-3">
            <div className="block-mode">
              <a href="#" className="block-mode-icon block-mode-icon1">
                <img src={editIcon} alt="edit-icon" />
              </a>
              <p className="my-2 d-flex align-items-center">
                Total challenges <span className="fa fa-question ml-3"></span>
              </p>
              <h2 className="font-IBM">24</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-md-0 mb-3">
            <div className="block-mode">
              <a href="#" className="block-mode-icon block-mode-icon3">
                <img src={Clarity} alt="clarity-administrator-line" />
              </a>
              <p className="my-2 d-flex align-items-center">
                Admins <span className="fa fa-question ml-3"></span>
              </p>
              <h2 className="font-IBM">10</h2>
            </div>
          </div>
        </div>
        <div className="row mx-0 mt-sm-4 mt-3">
          <SubmissionOverTime />
          <ProjectAdmin />
        </div>
        <MyChallenges />
      </div>
    </DashboardSidebar>
  );
};

export default AdminSettings;
