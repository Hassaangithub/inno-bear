import React, {useEffect, useState} from 'react';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import Vector3 from '../images/Vector-3.png';
import Vector4 from '../images/Vector-4.png';
import compass from '../images/compas.png';
import {Link, useNavigate} from 'react-router-dom';
import MyChallenges from '../components/UserDashboard/MyChallenges';
import editIcon from '../images/edit-icon.png';
import Clarity from '../images/clarity-administrator-line.png';
import ProjectAdmin from '../components/UserDashboard/ProjectAdmin';
import SubmissionOverTime from '../components/UserDashboard/SubmissionOverTime';
import {fetchStats, fetchSubmittedIdeas} from '../Services/dashboard';
import {toast, ToastContainer} from 'react-toastify';

const sidebarlist = [
  {
    img: FluentPeople,
    title: 'Team',
    path: '/dashboard/team',
  },
  {
    img: OutlineWork,
    title: 'Challenges',
    path: '/challenges',
  },
  {
    img: Vector,
    title: 'Innovation Pipeline',
    path: '/innovation-pipeline',
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
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [dashboardStats, setDashboardStats] = useState();
  useEffect(() => {
    const getStats = async () => {
      const response = await fetchStats();
      if (response.successData) {
        setDashboardStats(response.successData);
      } else {
        toast.error(response.response.data.message);
      }
    };

    const getData = async () => {
      const response = await fetchSubmittedIdeas();
      if (response.successData) {
        setData(response.successData);
      } else {
        toast.error(response.response.data.message);
      }
    };

    getStats();
    getData();
  }, []);
  return (
    <DashboardSidebar list={sidebarlist} isProfile={true}>
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
          <div
            role="button"
            onClick={() => navigate('/user-challenges')}
            className="col-md-4 col-sm-6 mb-md-0 mb-3">
            <div className="block-mode">
              <a href="#" className="block-mode-icon block-mode-icon1">
                <img src={editIcon} alt="edit-icon" />
              </a>
              <p className="my-2 d-flex align-items-center">
                Total challenges <span className="fa fa-question ml-3"></span>
              </p>
              <h2 className="font-IBM">
                {dashboardStats?.totalUserChallenges}
              </h2>
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
              <h2 className="font-IBM">1</h2>
            </div>
          </div>
        </div>
        <div className="row mx-0 mt-sm-4 mt-3">
          <SubmissionOverTime />
          <ProjectAdmin />
        </div>
        <MyChallenges myChallenges={data?.MyChallenges} />
      </div>
    </DashboardSidebar>
  );
};

export default AdminSettings;
