import React from 'react';
import CelebPic from '../images/celeb.png';
import EditIcon from '../images/edit-icon.png';
import BinPic from '../images/bin.png';
import FluentPeople from '../images/fluent-people.png';
import OutlineWork from '../images/outline-work.png';
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector-1.png';
import Vector3 from '../images/Vector-3.png';
import Vector4 from '../images/Vector-4.png';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {fetchStats, fetchSubmittedIdeas} from '../Services/dashboard';
import DashboardSidebar from '../components/UserDashboard/DashboardSidebar';
import MyChallenges from '../components/UserDashboard/MyChallenges';
import SubmittedChallengesCard from '../components/UserDashboard/SubmittedChallengesCard';
import OtherChallengesCard from '../components/UserDashboard/OtherChallengesCard';
import {toast, ToastContainer} from 'react-toastify';

const sidebarlist = [
  {
    img: FluentPeople,
    title: 'Team',
    path: '/dashboard/create-team',
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

const UserDashboard = () => {
  const [data, setData] = useState();
  const [dashboardStats, setDashboardStats] = useState();
  const navigate = useNavigate();

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
    <DashboardSidebar list={sidebarlist}>
      <div className="my-4 px-4 d-flex flex-wrap justify-content-between align-items-center">
        <h3 className="mb-0 user-name">
          Hello, {localStorage.getItem('username')?.toUpperCase()}
          <img src={CelebPic} alt="celeb" className="ml-3" />
        </h3>
        <button
          className="btn text-white"
          onClick={e => {
            e.preventDefault();
            navigate('/host-Challenge');
          }}>
          Host a Challenge
        </button>
      </div>
      <div className="row col-lg-11">
        <div
          className="col-md-4 col-sm-6 mb-md-0 mb-3"
          role="button"
          onClick={() => navigate('/user-challenges')}>
          <div className="block-mode">
            <a href="#" className="block-mode-icon block-mode-icon1">
              <img src={EditIcon} alt="edit-icon" />
            </a>
            <p className="my-2 d-flex align-items-center">
              Total challenges <span className="fa fa-question ml-3"></span>
            </p>
            <h2 className="font-unset">
              {dashboardStats?.totalUserChallenges}
            </h2>
          </div>
        </div>
        <div
          className="col-md-4 col-sm-6 mb-md-0 mb-3"
          role="button"
          onClick={() => navigate('/submitted-solution')}>
          <div className="block-mode">
            <a href="#" className="block-mode-icon block-mode-icon2">
              <img src={BinPic} alt="bin" />
            </a>
            <p className="my-2 d-flex align-items-center">
              Submitted Ideas <span className="fa fa-question ml-3"></span>
            </p>
            <h2 className="font-unset">{dashboardStats?.totalSubmitedIdeas}</h2>
          </div>
        </div>
        <div
          className="col-md-4 col-sm-6 mb-md-0 mb-3"
          role="button"
          onClick={() => navigate('/ongoing-challenges')}>
          <div className="block-mode">
            <a href="#" className="block-mode-icon block-mode-icon3">
              <img src={EditIcon} alt="edit-icon" />
            </a>
            <p className="my-2 d-flex align-items-center">
              Ongoing Challenges <span className="fa fa-question ml-3"></span>
            </p>
            <h2 className="font-unset">
              {dashboardStats?.totalOngoingChallenges}
            </h2>
          </div>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-12 d-flex flex-wrap justify-content-between my-4">
          <h5>Submitted Ideas</h5>
          <a href="#" className="text-muted">
            View more
          </a>
        </div>
        <SubmittedChallengesCard submittedIdea={data?.solutions} />
      </div>
      <div className="row mx-0">
        <div className="col-12 d-flex flex-wrap justify-content-between my-4">
          <h5>See other challenges you might like</h5>
          <a href="#" className="text-muted">
            View more
          </a>
        </div>
        {data?.favouriteChallenges.length ? (
          <OtherChallengesCard likedChallenges={data?.favouriteChallenges} />
        ) : (
          <div className="ml-4 text-center w-100">
            We donot have any liked challenge
          </div>
        )}
      </div>
      <MyChallenges myChallenges={data?.MyChallenges} />
    </DashboardSidebar>
  );
};

export default UserDashboard;
