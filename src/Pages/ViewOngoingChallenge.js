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
import moment from 'moment';

const ViewOngoingChallenge = () => {
  const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {id} = useParams();
  const challengeId = id.replace(':', '');
  const [updates, setUpdates] = useState();
  const [formData, setFormData] = useState({
    id: challengeId,
    created_at: moment(data?.created_at).format('YYYY-MM-DD'),
    start_date: moment(data?.start_date).format('YYYY-MM-DD'),
    cutoff_date: moment(data?.cutoff_date).format('YYYY-MM-DD'),
  });

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
  }, [success]);

  const afterUpdate = () => {
    setSuccess(!success);
  };

  const updateForm = (identifier, data) => {
    setFormData({...formData, [identifier]: data});
  };

  // const onEdit = async e => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const response = await updateChallenge(formData);
  //   if (response.status === 200) {
  //     toast.success(response.message);
  //     setLoading(false);
  //   } else {
  //     toast.error(response.message);
  //     setLoading(false);
  //   }
  // };
  return (
    <>
      <TopNav dashboard={true} />
      <Banner image={data?.header_image} title={data?.title} />
      <form className="page-main-content create-new-solution-pg px-md-5 px-3">
        <Overview
          challenge_type={data?.challenge_type}
          keywords={data?.keywords}
          descriptionAboutChallenge={data?.description_about_challenge}
          afterUpdate={afterUpdate}
        />
        <Timeline
          launch={data?.created_at}
          closing={data?.cutoff_date}
          submission={data?.start_date}
          deadline={data?.submission_date}
          afterUpdate={afterUpdate}
        />
        <Prizes
          previousAwards={data?.awards}
          prize={data?.award_prize}
          updateForm={updateForm}
        />
        <Rules rules={data?.rules} />
        <WinningCriteria determines={data?.determines} />
        <Resources resources={data?.attachment} />
        <Updates updates={updates} />
        {/* <button
          type="submit"
          onClick={onEdit}
          className="px-md-5 btn create-account-btn text-white mb-5 ml-auto">
          {loading ? (
            <div
              className="spinner-border text-primary spinner-border-md"
              role="status"
            />
          ) : (
            ' Save Changes'
          )}
        </button> */}
      </form>
      <Footer />
    </>
  );
};

export default ViewOngoingChallenge;
