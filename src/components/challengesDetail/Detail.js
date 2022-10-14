import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {singleChallenge} from '../../Services/challanges';
import Banner from './Banner';
import Navbar from './Navbar';
import Overview from './Overview';
import Community from './tabs/Community';
import OverviewTab from './tabs/OverviewTab';
import {Participants} from './tabs/Participants';
import Prizes from './tabs/Prizes';
import Resoucerses from './tabs/Resourses';
import Rules from './tabs/Rules';
import Timelines from './tabs/Timelines';
import Updates from './tabs/Updates';
import WinningCriteria from './tabs/WinningCriteria';
import Teams from './Teams';

const Detail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState('overview');
  const [activeTab, setActiveTab] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const getChallenge = async () => {
      setLoading(true);
      const response = await singleChallenge(param.id);
      if (!response) {
      } else {
        setData(response.data.successData.data);
        setLoading(false);
      }
    };
    getChallenge();
  }, []);

  return (
    <>
      <Banner />
      <div className="challenges-pg px-md-5 px-3">
        <div className="my-4 d-flex flex-wrap flex-md-row flex-column flex-column-reverse justify-content-between team-project-section">
          <div className="breadcrumbs">
            <a
              className={`link ${view === 'teams' && 'active'}`}
              onClick={() => setView('teams')}
              role="button">
              Teams
            </a>
            <a
              className={`link ${view === 'overview' && 'active'} ml-3`}
              onClick={() => setView('overview')}
              role="button">
              Overview
            </a>
          </div>
          <div className="text-md-left text-center">
            <button
              className="btn text-white"
              onClick={() => {
                if (localStorage.getItem('token')) {
                  navigate('/challenges/create-solution');
                } else {
                  navigate('/sign-in');
                }
              }}>
              Create a Solution
            </button>
          </div>
        </div>
        <div className="tab-content" id="challengeTypeTabContent">
          {view === 'overview' && <Overview />}
          {view === 'teams' && <Teams />}
          <Navbar
            tab={view}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {activeTab === 'Overview' && <OverviewTab />}
          {activeTab === 'Rules' && <Rules />}
          {activeTab === 'Timeline' && <Timelines />}
          {activeTab === 'Prizes' && <Prizes />}
          {activeTab === 'Winning Criteria' && <WinningCriteria />}
          {activeTab === 'Participants' && <Participants />}
          {activeTab === 'Resources' && <Resoucerses />}
          {activeTab === 'Updates' && <Updates />}
          {activeTab === 'Community' && <Community />}
        </div>
      </div>
    </>
  );
};

export default Detail;
