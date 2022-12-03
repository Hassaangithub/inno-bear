import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {
  getCommunity,
  getUpdates,
  singleChallenge,
} from '../../Services/challanges';
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
import {challengeId, challengeAtom, currentChallenge} from '../../recoil/atom';
import {useSetRecoilState} from 'recoil';
import {toast, ToastContainer} from 'react-toastify';
import {useRecoilValue} from 'recoil';

const Detail = () => {
  const param = useParams();
  const id = param.id.replace(':', '');
  const navigate = useNavigate();
  const [view, setView] = useState('overview');
  const [activeTab, setActiveTab] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [updates, setUpdates] = useState();
  const [communityPost, setCommunityPost] = useState();
  const [message, setMessage] = useState();

  const setChallengeId = useSetRecoilState(challengeId);
  const allChallenges = useRecoilValue(challengeAtom);
  const setCurrentChallenge = useSetRecoilState(currentChallenge);

  const getChallenge = async id => {
    setLoading(true);
    const response = await singleChallenge(id);
    if (response) {
      // toast.success(response.data.message);
      setData(response.data.successData.data);
      setCurrentChallenge(response.data.successData.data);
      setLoading(false);
    } else {
      toast.error(response.response.data.message);
      setLoading(false);
    }
  };

  const fetchUpdates = async id => {
    const response = await getUpdates({challenge_id: Number(id)});
    if (response.successData) {
      setUpdates(response.successData?.data);
    }
  };

  const fetchCommunityPosts = async id => {
    const response = await getCommunity({challenge_id: Number(id)});
    if (response.successData) {
      setCommunityPost(response.successData?.challengeTopic);
    }
  };
  useEffect(() => {
    setChallengeId(id);
    getChallenge(id);
    fetchUpdates(id);
  }, []);

  useEffect(() => {
    fetchCommunityPosts(id);
  }, [message]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Banner image={data?.header_image} title={data?.title} />
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
          {view === 'overview' && (
            <Overview
              cashPrize={data?.award_prize}
              type={data?.keywords}
              submission={data?.submission_date}
              close={data?.cutOff_date}
            />
          )}
          {view === 'teams' && (
            <Teams
              description={data?.description_about_challenge}
              type={data?.challenge_type}
              keyword={data?.keywords}
            />
          )}
          <Navbar
            tab={view}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {activeTab === 'Overview' && (
            <OverviewTab
              goal={data?.end_goal}
              background={data?.description_about_challenge}
            />
          )}
          {activeTab === 'Rules' && <Rules rules={data?.rules} />}
          {activeTab === 'Timeline' && (
            <Timelines
              launch={data?.created_at}
              closing={data?.cutOff_date}
              submission={data?.submission_date}
            />
          )}
          {activeTab === 'Prizes' && (
            <Prizes awards={data?.awards} prize={data?.award_prize} />
          )}
          {activeTab === 'Winning Criteria' && (
            <WinningCriteria winningRule={data?.determines} />
          )}
          {activeTab === 'Participants' && <Participants />}
          {activeTab === 'Resources' && (
            <Resoucerses resources={data?.attachment} />
          )}
          {activeTab === 'Updates' && <Updates updates={updates} />}
          {activeTab === 'Community' && (
            <Community
              communityPost={communityPost}
              message={message}
              setMessage={setMessage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
