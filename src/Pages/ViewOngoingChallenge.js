import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import Banner from '../components/challengesDetail/Banner';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';
import {getUpdates, singleChallenge} from '../Services/challanges';
import {
  Overview,
  Prizes,
  Resources,
  Rules,
  Timeline,
  Updates,
  WinningCriteria,
} from '../components/viewOngoingChallenges';

const ViewOngoingChallenge = () => {
  const [data, setData] = useState();
  const {id} = useParams();
  const challengeId = id.replace(':', '');
  const [updates, setUpdates] = useState();

  const fetchUpdates = async id => {
    const response = await getUpdates({challenge_id: Number(id)});
    if (response.successData) {
      setUpdates(response.successData?.data);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await singleChallenge(challengeId);
      if (response.data.successData) {
        setData(response.data.successData.data);
      } else {
        toast.error(response.response.data.message);
      }
    };

    getData();
    fetchUpdates(challengeId);
  }, []);
console.log(data)
  return (
    <>
      <TopNav dashboard={true} />
      <Banner image={data?.header_image} title={data?.title} />
      <div className="page-main-content create-new-solution-pg px-md-5 px-3">
        <Overview
          challenge_type={data?.challenge_type}
          keywords={data?.keywords}
          description_about_challenge={data?.description_about_challenge}
        />
        <Timeline
          launch={data?.created_at}
          closing={data?.cutoff_date}
          submission={data?.start_date}
          deadline= {data?.submission_date}
        />
        <Prizes awards={data?.awards} prize={data?.award_prize} />
        <Rules rules={data?.rules} />
        <WinningCriteria determines={data?.determines} />
        <Resources resources={data?.attachment} />
        <Updates updates={updates} />
      </div>
      <Footer />
    </>
  );
};

export default ViewOngoingChallenge;



// https://innobearadmin.floor23digital.com/api/challenge-update